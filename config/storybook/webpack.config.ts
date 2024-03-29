import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config?.resolve?.modules?.push(paths.src);
  config?.resolve?.extensions?.push('.ts', '.tsx');

  if (config?.module?.rules) {
    config.module.rules = config.module.rules.map((rule) => {
      if (typeof rule === 'object') {
        if (/svg/.test(rule.test as string)) {
          return {
            ...rule, exclude: /\.svg$/i,
          };
        }
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoaders(true));
  }

  config?.plugins?.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API_URL__: JSON.stringify(''),
  }));

  return config;
};
