import { useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [carts, setCarts] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ carts, setCarts }}>
          <MainLayout />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
