import React, { useState } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { ShipList } from '../ship/ship-list';
import { LazyImage } from '../lazy-image';

import './app.css';
import headerIcon from '../assets/header-icon.svg';
import { ThemeSwitcher } from '../theme-switcher';
import { ThemeContextProvider } from '../providers';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = { theme, handleToggleTheme };

  return (
    <ErrorBoundary>
      <ThemeContextProvider value={contextValue}>
        <div className={theme}>
          <header className="header">
            <LazyImage
              className="header_icon"
              src={headerIcon}
              alt="header-icon"
            />
            <h1>World of Warships</h1>
            <ThemeSwitcher
              onToggleTheme={handleToggleTheme}
              theme={theme}
            />
          </header>
          <ShipList />
        </div>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}
