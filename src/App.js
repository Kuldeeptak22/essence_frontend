import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import ContactPage from "./pages/ContactPage";
import PaymentPage from "./pages/PayementPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ShippingPage from "./pages/ShippingPage";
import CancellationPage from "./pages/CancellationPage";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ViewAll from "./components/ViewAll/ViewAll";
// import ProductDetails from "./pages/ProductDetails";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/cancellation" element={<CancellationPage />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/products/:subCatId" element={<ProductPage />} />
          <Route path="/viewall/:categoryName" element={<ViewAll />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
