// src/App.js
import React from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Context API Demo</h1>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <div>
              <p>Current Theme: {theme}</p>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    </ThemeProvider>
  );
};

export default App;
