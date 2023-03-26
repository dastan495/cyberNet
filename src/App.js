import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoutes from "./Route/MainRoutes";

function App() {
    return (
        <div style={{ position: "relative", overflowX: "hidden" }}>
            {/* <Header /> */}
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
