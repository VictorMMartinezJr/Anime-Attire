import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import ShopLinks from "./components/ShopLink/ShopLinks";
import Footer from "./components/Footer/Footer";
import Mens from "./Pages/Mens";
import MensTees from "./Pages/MensTees";
import MensHoodies from "./Pages/MensHoodies";
import CartPage from "./Pages/CartPage";
import Accessories from "./Pages/Accessories";
import Womens from "./Pages/Womens";
import WomensHoodies from "./Pages/WomensHoodies";
import WomensTees from "./Pages/WomensTees";

function App() {
  return (
    <main id="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/mens-tees" element={<MensTees />} />
          <Route path="/mens-hoodies" element={<MensHoodies />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/womens-tees" element={<WomensTees />} />
          <Route path="/womens-hoodies" element={<WomensHoodies />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <ShopLinks />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
