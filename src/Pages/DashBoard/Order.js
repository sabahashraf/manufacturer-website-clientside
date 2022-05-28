import React from "react";
import { Link } from "react-router-dom";

const Order = ({ order, setDeletingOrder }) => {
  /* const {
    toolName,
    toolQty,
    toolPrice,
    toolImg,
    name,
    email,
    address,
    phone,
    _id,
  } = order; */

  return (
    <div className="card card-side max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img
          src={order.toolImg}
          style={{ width: "200px", height: "200px" }}
          alt="Album"
          className="ml-5"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary">{order.toolName}</h2>
        <p>
          <span className="font-bold pr-2">Qty:</span>
          {order.toolQty}
        </p>
        <p>
          <span className="font-bold pr-2">Total Price:</span>
          {order.toolPrice}
        </p>
        <ul>
          <li className="font-bold"> Shipping Address:</li>
          <li>Name:{order.name}</li>
          <p>Address:{order.address}</p>
          <p>Phone no: {order.phone}</p>
          <p>Email:{order.email}</p>
        </ul>
        <div className="card-actions justify-end">
          {order.toolPrice && !order.paid && (
            <label
              onClick={() => setDeletingOrder(order)}
              htmlFor="order-delete"
              className="btn btn-sm btn-error"
            >
              Delete
            </label>
          )}
          {order.toolPrice && !order.paid && (
            <Link to={`/dashboard/payment/${order._id}`}>
              <button className="btn btn-sm btn-primary ml-3">Pay</button>
            </Link>
          )}
          {order.toolPrice && order.paid && (
            <div>
              {" "}
              <p>
                {" "}
                <span className="text-success font-bold text-xl ml-3">
                  Paid
                </span>
              </p>
              <p>
                Transaction id:
                <span className="text-success ml-3">{order.transactionId}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
