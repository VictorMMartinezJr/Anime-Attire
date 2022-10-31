import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ShopLinks from "./components/ShopLink/ShopLinks";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main id="main">
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <ShopLinks />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
