import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './actions/productActions';
import Home from './Home';
import MyCart from './Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products when the app loads
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Shopping Cart App</h1>
        </header>
        <main>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/my-cart" component={MyCart} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
