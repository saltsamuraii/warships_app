import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactSwitch from 'react-switch';
import { LazyImage } from '../lazy-image';

import lightTheme from '../assets/light-theme-icon.svg';
import darkTheme from '../assets/dark-theme-icon.svg';

import './theme-switcher.css';

interface ThemeSwitcherProps {
  theme: string;
  onToggleTheme: () => void;
}

export default function ThemeSwitcher({
  theme,
  onToggleTheme,
}: ThemeSwitcherProps) {
  return (
    <ReactSwitch
      className="theme_switch"
      checked={theme === 'dark'}
      onChange={onToggleTheme}
      offColor="#fff"
      offHandleColor="#000"
      onColor="#000"
      uncheckedIcon={
        <LazyImage
          src={darkTheme}
          alt="light-theme-icon"
        />
      }
      checkedIcon={
        <LazyImage
          src={lightTheme}
          alt="dark-theme-icon"
        />
      }
    />
  );
}
