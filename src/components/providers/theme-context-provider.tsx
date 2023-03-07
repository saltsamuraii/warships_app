import React, { createContext, ReactNode } from 'react';

interface ThemeContextProps {
  theme: string;
  handleToggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeContextProviderProps {
  children: ReactNode;
  value: {
    theme: string,
    handleToggleTheme: () => void,
  }
}

export default function ThemeContextProvider({ children, value }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}