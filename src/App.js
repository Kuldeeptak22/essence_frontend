import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import { ContactPage } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newPage" element={<NewPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
      <h1>hello</h1>
    </div>
  );
}

export default App;
