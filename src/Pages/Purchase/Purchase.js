import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [selectedTool, setSelectedTool] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedTool(data));
  }, []);
  const [quantity, setQuantity] = useState(3);
  const [error, setError] = useState("");

  const handleQuantity = (event) => {
    if (
      event.target.value > selectedTool.minQty ||
      event.target.value < selectedTool.availableQty
    ) {
      setQuantity(event.target.value);
      setError("");
    }

    if (event.target.value < selectedTool.minQty) {
      setError(
        `you need to order atleast ${selectedTool.minQty} ${selectedTool.name}`
      );
    }
    if (event.target.value > selectedTool.availableQty) {
      setError(
        `you can't order more than ${selectedTool.availableQty} ${selectedTool.name}`
      );
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      toolName: selectedTool.name,
      toolQty: event.target.quantity.value,
      toolPrice: event.target.total.value,
      toolImg: selectedTool.img,
      name: user.displayName,
      email: user.email,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Your order has been placed");
        }
      });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 my-20">
        <figure>
          <img src={selectedTool.img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{selectedTool.name}</h2>
          <p>
            <span className="font-bold">Details:</span>
            {selectedTool.description}
          </p>
          <p>
            <span className="font-bold">Available Quantity:</span>
            {selectedTool.availableQty}
          </p>
          <p>
            <span className="font-bold">Minimum Order Quantity:</span>
            {selectedTool.minQty}
          </p>
          <p>
            <span className="font-bold">price Per Unit:</span>
            {selectedTool.price}
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center my-12">
          Place your Order
        </h2>
        <form className="form-control" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input input-bordered input-accent w-full max-w-sm mx-auto mb-3"
            value={user?.displayName || ""}
            name="name"
          />
          <input
            type="email"
            value={user?.email}
            className="input input-bordered input-accent w-full max-w-sm
            mx-auto mb-3 "
            name="email"
          />
          <input
            type="text"
            placeholder="Phone no"
            className="input input-bordered input-accent w-full max-w-sm   mx-auto mb-3"
            name="phone"
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            className="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
          />
          <div className="flex mx-auto justify-center  items-center ">
            <p className="pr-3">Qty:</p>
            <input
              type="number"
              value={quantity}
              name="quantity"
              className="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
              onChange={handleQuantity}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex mx-auto justify-center  items-center ">
            <p className="pr-3">Total Price:</p>
            <input
              type="text"
              placeholder="address"
              className="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
              value={parseInt(selectedTool.price) * quantity}
              name="total"
            />
          </div>
          <button
            type="submit"
            disabled={error}
            className=" btn btn-secondary w-full max-w-sm  mx-auto my-12"
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
