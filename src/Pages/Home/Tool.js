import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, description, price, minQty, availableQty } = tool;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          style={{ height: "225px" }}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 150)}...</p>
        <p>
          <span className="font-semibold text-lg">Price:</span>
          {price}/unit
        </p>
        <p>
          <span className="font-semibold text-lg">Available quantity:</span>
          {availableQty}
        </p>
        <p>
          <span className="font-semibold text-lg">Minimum order quantity:</span>
          {minQty}
        </p>

        <div className="card-actions justify-center ">
          <Link to={`/tool/${_id}`}>
            <button className="btn btn-primary text-white hover:btn-accent hover:text-white ">
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
