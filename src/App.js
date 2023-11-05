import { Provider } from "react-redux";
import "./App.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import MainRoutes from "./route/MainRoutes";
import { useEffect } from "react";
import { checkUserLogin } from "./helpers/function";

function App() {
  useEffect(() => {
    checkUserLogin();
  }, []);
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
