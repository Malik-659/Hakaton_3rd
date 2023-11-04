import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./components/ui/Navbar";
import MainRoutes from "./route/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  );
}

export default App;
