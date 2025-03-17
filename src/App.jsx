import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./Pages/HomePage/HomePage";
import PriceComparison from "./Pages/PriceComparison/PriceComparison";
import TopSets from "./Pages/TopSets/TopSets";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<PriceComparison />} />{" "}
          {/* Updated path */}
          <Route path="/top-sets/:page?" element={<TopSets />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
