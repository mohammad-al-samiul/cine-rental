import { useContext } from "react";
import Movies from "../../pages/movies/movies";
import Footer from "../../pages/shared/footer";
import Header from "../../pages/shared/header";
import Sidebar from "../ui/sidebar";
import { ThemeContext } from "../../context";

export default function MainLayout() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`w-full h-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Movies />
        </div>
      </main>
      <Footer />
    </div>
  );
}
