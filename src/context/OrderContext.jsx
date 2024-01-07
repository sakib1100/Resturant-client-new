import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";

export const OrderContext = React.createContext();
export default function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState(null);
  const [user] = useAuthState(auth);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    fetch(`https://restaurant-server-day3.onrender.com/getPostData?email=${user.email}`)
      .then((res) => res.json())
      .then((dbData) => setOrders(dbData));
  };

  const reload = () => getOrder();

  return (
    <OrderContext.Provider value={{ orders, reload }}>
      {children}
    </OrderContext.Provider>
  );
}
