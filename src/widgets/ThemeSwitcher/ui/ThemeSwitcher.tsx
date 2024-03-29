import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Theme } from 'shared/lib/useTheme/ThemContext';

import NormalIcon from 'shared/assets/icons/icon-theme-normal.svg';
import DarkIcon from 'shared/assets/icons/icon-theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const classes = classNames('', {}, [className]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classes}
      onClick={toggleTheme}
    >
      {theme === Theme.DEFAULT ? <NormalIcon /> : <DarkIcon />}
    </Button>
  );
};
