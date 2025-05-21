import { useReducer, useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { MovieContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducers/CartReducer";
import { ToastContainer } from "react-toastify";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <ToastContainer position="bottom-right" />
          <MainLayout />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
