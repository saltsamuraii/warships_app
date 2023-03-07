import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from '../error-boundary';
import { ThemeContextProvider } from '../providers';
import { Header } from '../header';
import { ShipList } from '../ship/ship-list';
import useShips from '../hooks/useShips';

import './app.css';
import './theme.css';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const { isLoading, ships } = useShips();

  const handleToggleTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    window.localStorage.setItem('theme', currentTheme);
    setTheme(currentTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const contextValue = { theme, handleToggleTheme };

  return (
    <ErrorBoundary>
      <ThemeContextProvider value={contextValue}>
        <div className={theme}>
          <Header
            handleToggleTheme={handleToggleTheme}
            theme={theme}
          />
          <ShipList
            ships={ships}
            isLoading={isLoading}
          />
        </div>
      </ThemeContextProvider>
    </ErrorBoundary>
  );
}
