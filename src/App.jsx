
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router को import करें
import Navbar from './Navbar.jsx'; // Navbar import करें



function App() {
  return (
    
    <Router>
    
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/About" element={<Navbar />} />
          <Route path="/services" element={<Navbar />} />
          <Route path="/contact" element={<Navbar />} />
          <Route path="/portfolio" element={<Navbar />} />
          <Route path="/FruitShop" element={<Navbar />} />
        </Routes>

    </Router>

  );
}

export default App;


