import { useState } from "react";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import { MovieContext } from "./context";

function App() {
  const [carts, setCarts] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ carts, setCarts }}>
        <MainLayout />
      </MovieContext.Provider>
    </>
  );
}

export default App;
