import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cartItems: CartItem[] = [
  { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
  { id: 2, name: "Product 2", price: 49.99, quantity: 2 },
];

const Cart: React.FC = () => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="px-4 py-24 mx-auto max-w-7xl bg-black text-white">
      <div className="w-full mx-auto space-y-5 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12">
        <h1 className="text-4xl font-semibold text-center">Shopping Cart</h1>

        <div className="space-y-4 border-b border-gray-600 pb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-400">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-6 text-lg font-semibold">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        <button className="w-full py-3 mt-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200">
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
