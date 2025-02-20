import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Register from './pages/Register.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.user.user); // Get user from Redux state

  if (!user) {
    return <Navigate to="/register" />;
  }

  return children;
}

function App() {
  const user = useSelector((state) => state.user.user); // Accessing user from the Redux store

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        <Route
          path="/"
          element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>}
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<ProtectedRoute>
          <About />
        </ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute>
          <ContactUs />
        </ProtectedRoute>} />
        <Route path="/product/:id" element={<ProtectedRoute>
          <ProductDetails />
        </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

// Wrap the entire app inside <Provider> and <PersistGate>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
