import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: <strong>{theme}</strong></p>;
}

function ContextExample() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <section>
        <h2>Context Example</h2>
        <p>Context helps avoid prop drilling for shared values like theme or user data.</p>
        <ThemeDisplay />
        <button onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}>
          Toggle theme
        </button>
      </section>
    </ThemeContext.Provider>
  );
}

export default ContextExample;
