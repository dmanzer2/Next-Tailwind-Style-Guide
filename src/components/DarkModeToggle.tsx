'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-20 items-center justify-center rounded-full bg-surface border-2 border-border hover:border-primary-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`absolute inset-1 w-6 h-6 rounded-full bg-gradient-to-r transition-transform duration-200 ease-in-out ${
          theme === 'dark'
            ? 'translate-x-8 from-lavender-400 to-lavender-600'
            : 'translate-x-0 from-coral-400 to-coral-600'
        }`}
      />
      <div className="relative flex w-full items-center justify-between px-2 text-xs font-medium">
        <span className={`transition-colors ${theme === 'light' ? 'text-white' : 'text-foreground/60'}`}>
          ☀️
        </span>
        <span className={`transition-colors ${theme === 'dark' ? 'text-white' : 'text-foreground/60'}`}>
          🌙
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;
