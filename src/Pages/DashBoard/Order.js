import React from "react";

const Order = ({ order }) => {
  const { toolName, toolQty, toolPrice, toolImg, name, email, address, phone } =
    order;
  return (
    <div class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={toolImg}
          style={{ width: "200px", height: "200px" }}
          alt="Album"
          className="ml-5"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{toolName}</h2>
        <p>
          <span className="font-bold pr-2">Qty:</span>
          {toolQty}
        </p>
        <p>
          <span className="font-bold pr-2">Total Price:</span>
          {toolPrice}
        </p>
        <ul>
          <li>
            {" "}
            <span className="bold">Shipping Address:</span>
          </li>
          <li>{name}</li>
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </ul>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
