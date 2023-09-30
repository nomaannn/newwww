import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './actions/cartActions';

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const handleAddToCart = (product) => {
    // Dispatch an action to add the product to the cart
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
