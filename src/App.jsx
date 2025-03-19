import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy/privacypolicy"; // Ensure file name is exactly as on disk
import PriceComparison from "./Pages/PriceComparison/PriceComparison";
import TopSets from "./Pages/TopSets/TopSets";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/search" element={<PriceComparison />} />
        <Route path="/top-sets/:page?" element={<TopSets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;