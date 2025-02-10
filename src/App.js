import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import FetchBtn from './components/FetchButton';
import PostList from './components/PostList';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import './styles/App.css';

const Home = () => {
  const [posts, setPost] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Error data fetch');
      }
      const data = await response.json();
      setPost(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <nav>
        <FetchBtn onClick={fetchData} />
        <button onClick={() => setShowCart(!showCart)}>
          Корзина ({cartItems.length})
        </button>
        <button onClick={handleLogout}>Выход</button>
      </nav>
      <div className="App">
        <PostList posts={posts} addToCart={addToCart} />
        {showCart && (
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
        )}
      </div>
    </div>
  ); 
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;