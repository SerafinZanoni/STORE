/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Cart: React.FC = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <p>Your cart is empty.</p>

      <div>
        <div className="cart-item">
          <div className="cart-item-details">
            <h4>{}</h4>
            <p>${}</p>
            <p>Quantity: </p>
            <div className="cart-item-actions">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <h3>Total: $</h3>
          <button>Clear Cart</button>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
