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
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={order.toolImg}
          style={{ width: "200px", height: "200px" }}
          alt="Album"
          className="ml-5"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{order.toolName}</h2>
        <p>
          <span className="font-bold pr-2">Qty:</span>
          {order.toolQty}
        </p>
        <p>
          <span className="font-bold pr-2">Total Price:</span>
          {order.toolPrice}
        </p>
        <ul>
          <li>
            {" "}
            <span className="bold">Shipping Address:</span>
          </li>
          <li>{order.name}</li>
          <p>{order.address}</p>
          <p>{order.phone}</p>
          <p>{order.email}</p>
        </ul>
        <div class="card-actions justify-end">
          {order.toolPrice && !order.paid && (
            <label
              onClick={() => setDeletingOrder(order)}
              for="order-delete"
              class="btn btn-sm btn-error"
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
                <span className="text-success ml-3">Paid</span>
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
