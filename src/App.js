import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./Route/MainRoutes";

function App() {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
