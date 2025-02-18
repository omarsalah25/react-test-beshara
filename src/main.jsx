import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import necessary routing components
import About from './pages/About'
import ContactUs from './pages/ContactUs.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Home from './pages/Home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </StrictMode>
)
