import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className = '', short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const classes = classNames('', {}, [className]);

  const onLangToggle = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button onClick={onLangToggle} theme={ButtonTheme.CLEAR} className={classes}>
      {short ? t('Сокращенный язык') : t('Язык')}
    </Button>
  );
};
