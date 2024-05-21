import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";

import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
