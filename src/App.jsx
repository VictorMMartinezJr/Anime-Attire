import "./App.css";
import Banner from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <main id="main">
      <Navbar />
      <Banner />
      <Home />
    </main>
  );
}

export default App;
