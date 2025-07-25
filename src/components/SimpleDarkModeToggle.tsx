'use client';

import React, { useState, useEffect } from 'react';

const SimpleDarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDark(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update HTML class
    document.documentElement.classList.toggle('dark', newTheme);
    
    // Save preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    // Debug: log the current state
    console.log('Dark mode toggled:', newTheme);
    console.log('HTML classes:', document.documentElement.className);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-18 items-center justify-center rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--border)',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div
        className="absolute inset-1 w-7 h-7 rounded-full transition-transform duration-200 ease-in-out"
        style={{
          transform: isDark ? 'translateX(2rem)' : 'translateX(0)',
          background: isDark 
            ? 'linear-gradient(to right, var(--lavender-400), var(--lavender-600))'
            : 'linear-gradient(to right, var(--coral-400), var(--coral-600))',
        }}
      />
      <div className="relative flex w-full items-center justify-between px-2 text-xs font-medium">
        <span 
          className="transition-colors"
          style={{ color: !isDark ? 'white' : 'var(--foreground)' }}
        >
        </span>
        <span 
          className="transition-colors"
          style={{ color: isDark ? 'white' : 'var(--foreground)' }}
        >
        </span>
      </div>
    </button>
  );
};

export default SimpleDarkModeToggle;
