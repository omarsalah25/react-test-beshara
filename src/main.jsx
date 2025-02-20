import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Import necessary routing components
import About from './pages/About'
import ContactUs from './pages/ContactUs.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Register from './pages/Register.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </PersistGate>

      </Provider>

    </Router>
  </StrictMode>
)
