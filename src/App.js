import "./App.css";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import MainRoutes from "./route/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
