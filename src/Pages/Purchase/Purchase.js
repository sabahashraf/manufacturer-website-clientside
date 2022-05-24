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

  const handleQuantity = (e) => {
    if (
      e.target.value > selectedTool.minQty ||
      e.target.value < selectedTool.availableQty
    ) {
      setQuantity(e.target.value);
      setError("");
    }

    if (e.target.value < selectedTool.minQty) {
      setError(
        `you need to order atleast ${selectedTool.minQty} ${selectedTool.name}`
      );
    }
    if (e.target.value > selectedTool.availableQty) {
      setError(
        `you can't order more than ${selectedTool.availableQty} ${selectedTool.name}`
      );
    }
  };

  return (
    <div>
      <div class="card lg:card-side bg-base-100 my-20">
        <figure>
          <img src={selectedTool.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{selectedTool.name}</h2>
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
        <form className="form-control">
          <input
            type="text"
            class="input input-bordered input-accent w-full max-w-sm mx-auto mb-3"
            name="name"
            value={user?.displayName || ""}
            readOnly
            disabled
          />
          <input
            type="email"
            value={user?.email || ""}
            class="input input-bordered input-accent w-full max-w-sm
            mx-auto mb-3 "
            name="email"
            readOnly
            disabled
          />
          <input
            type="text"
            placeholder="Phone no"
            class="input input-bordered input-accent w-full max-w-sm   mx-auto mb-3"
          />
          <input
            type="text"
            placeholder="address"
            class="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
          />
          <div className="flex mx-auto justify-center  items-center ">
            <p className="pr-3">Qty:</p>
            <input
              type="text"
              value={quantity}
              name="quantity"
              class="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
              onChange={handleQuantity}
            />
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex mx-auto justify-center  items-center ">
            <p className="pr-3">Total Price:</p>
            <input
              type="text"
              placeholder="address"
              class="input input-bordered input-accent w-full max-w-sm  mx-auto mb-3"
              value={selectedTool.price * quantity}
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
