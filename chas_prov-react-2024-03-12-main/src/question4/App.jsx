// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#f0f0f0" : "#333",
        padding: "40px",
        margin: "10px",
      }}
    >
      <p style={{ color: theme === "light" ? "#333" : "#f0f0f0" }}>
        try toggle
      </p>
    </div>
  );
};

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ margin: "10px" }}>
      Toggle Theme
    </button>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <h2>light mode or dark mode</h2>
      <ThemedComponent />
      <ThemedComponent />
      <ThemeToggleButton />
    </ThemeProvider>
  );
};

export default App;
