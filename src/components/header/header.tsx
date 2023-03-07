import React from 'react';
import { LazyImage } from '../lazy-image';
import { ThemeSwitcher } from '../theme-switcher';

import './header.css'
import lightHeaderIcon from '../assets/light-header-icon.svg';
import darkHeaderIcon from '../assets/dark-header-icon.svg';

interface HeaderProps {
  theme: string;
  handleToggleTheme: () => void;
}

export default function Header({ theme, handleToggleTheme }: HeaderProps) {
  const iconHeaderTheme = theme === 'dark' ? lightHeaderIcon : darkHeaderIcon;

  return (
    <header className="header">
      <LazyImage
        className="header_icon"
        src={iconHeaderTheme}
        alt="header-icon"
      />
      <h1>World of Warships</h1>
      <ThemeSwitcher
        onToggleTheme={handleToggleTheme}
        theme={theme}
      />
    </header>
  );
}
