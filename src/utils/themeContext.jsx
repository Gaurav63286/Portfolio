import React, { createContext, useContext, useState, useEffect } from 'react';
import { colorThemes } from '../data/portfolioData';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default to the first new theme: Electric Cyan (#00F0FF)
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gaurav_portfolio_theme');
      if (saved) {
        const found = colorThemes.find(t => t.id === saved);
        if (found) return found;
      }
    }
    return colorThemes[0]; // Electric Cyan
  });

  const applyTheme = (theme) => {
    setCurrentTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gaurav_portfolio_theme', theme.id);
      const root = document.documentElement;
      root.style.setProperty('--accent', theme.accent);
      root.style.setProperty('--accent-hover', theme.hover);
      root.style.setProperty('--accent-muted', theme.muted);
      root.style.setProperty('--accent-glow', theme.glow);
      root.style.setProperty('--accent-contrast', theme.contrast);
      if (theme.background) {
        root.style.setProperty('--background', theme.background);
      }
      if (theme.text) {
        root.style.setProperty('--text-primary', theme.text);
      }
    }
  };

  useEffect(() => {
    applyTheme(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: applyTheme, themes: colorThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
