import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './actions/cartActions';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    // Dispatch an action to remove the product from the cart
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    // Dispatch an action to clear the cart
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>My Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );

  // Helper function to calculate the total price of items in the cart
  function calculateTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  }
}

export default Cart;
