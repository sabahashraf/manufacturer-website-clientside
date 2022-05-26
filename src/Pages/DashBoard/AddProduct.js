import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTool = {
      name: data.name,
      img: data.img,
      minQty: data.minQty,
      availableQty: data.availableQty,
      price: data.price,
      description: data.description,
    };
    fetch("http://localhost:5000/tool", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(newTool),
    })
      .then((res) => res.json())
      .then((inserted) => {
        if (inserted.insertedId) {
          toast.success("New Tool added successfully");
          reset();
        } else {
          toast.error("failed to add a tool");
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-primary my-12 text-center">Add a tool</h2>
      <div className="grid lg:grid-cols-1 gap-3 justify-items-center mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Tool Name"
            class="input input-bordered input-primary form-control w-full max-w-md mb-3"
            {...register("name", { required: true })}
          />

          <input
            type="number"
            placeholder="Minimum Quantity"
            class="input input-bordered input-primary w-full form-control max-w-md mb-3"
            {...register("minQty", { required: true })}
          />
          <input
            type="number"
            placeholder="Available Quantity"
            class="input input-bordered input-primary w-full form-control max-w-md mb-3"
            {...register("availableQty", { required: true })}
          />
          <input
            type="number"
            placeholder="Price/unit"
            class="input input-bordered form-control input-primary w-full max-w-md mb-3"
            {...register("price", { required: true })}
          />
          <input
            type="text"
            placeholder="Image"
            class="input input-bordered input-primary form-control w-full max-w-md mb-3"
            {...register("img", { required: true })}
          />
          <textarea
            type="text"
            placeholder=" Tool Details"
            class="textarea textarea-primary form-control w-full mb-3 max-w-md"
            {...register("description", { required: true })}
          />
          <input
            type="submit"
            className="btn btn-primary w-full max-w-md"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
