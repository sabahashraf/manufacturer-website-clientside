import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, description, price, minQty, availableQty } = tool;
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          style={{ height: "225px" }}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0, 150)}...</p>
        <p>
          <span className="font-bold text-lg">Price:</span>
          {price}/unit
        </p>
        <p>
          <span className="font-bold text-lg">Available quantity:</span>
          {availableQty}
        </p>
        <p>
          <span className="font-bold text-lg">Minimum order quantity:</span>
          {minQty}
        </p>

        <div class="card-actions">
          <Link to={`/tool/${_id}`}>
            <button class="btn btn-primary">Purchase</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
