"use client";

import { getOrders } from "@/api/orderAPI";
import { IUserOrder } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";

interface OrderListProps {
  userToken: string;
}

const OrderList: React.FC<OrderListProps> = ({ userToken }) => {
  const [orderList, setOrderList] = useState<IUserOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders(userToken);
      setOrderList(orders);
    };

    fetchOrders();
  }, [userToken]);

  return (
    <div className="bg-black  ">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Your Orders
      </h1>
      {orderList.length === 0 ? (
        <p className="text-gray-400 text-center">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orderList.map((order) => (
            <div
              key={order.id}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                Order ID: {order.id}
              </h3>
              <p className="text-sm text-gray-400">Date: {order.date}</p>
              <p
                className={`text-sm font-medium mt-1 ${
                  order.status === "approved"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                Status: {order.status}
              </p>
              <h4 className="text-lg font-semibold mt-4 mb-2">Products:</h4>
              <ul className="space-y-2">
                {order.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center bg-gray-700 p-3 rounded"
                  >
                    <span>{product.name}</span>
                    <span className="text-green-400 font-semibold">
                      ${product.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;
