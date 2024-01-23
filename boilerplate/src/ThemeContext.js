// boilerplate/src/ThemeContext.js
import React, { createContext, useState } from 'react';

// Intentionally breaking the Context API functionality
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
