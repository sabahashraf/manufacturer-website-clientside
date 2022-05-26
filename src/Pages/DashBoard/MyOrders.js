import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Order from "./Order";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: "GET",

        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  return (
    <div>
      <h3 className="text-3xl mt-7">
        Hi,<span className="text-primary font-bold">{user.displayName}</span>
        ,please pay for your order
      </h3>
      <div className="grid grid-cols-1 gap-5 my-40 ">
        {orders.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
