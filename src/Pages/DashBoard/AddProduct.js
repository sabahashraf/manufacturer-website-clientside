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
    <div className="flex flex-col  mt-2 mx-auto">
      <h2 className="text-3xl font-bold text-primary my-12 text-center w-2/3">
        Add a tool
      </h2>
      <div className="grid lg:grid-cols-1 gap-3 justify-items-center mt-2">
        <form className="mx-auto w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Tool Name"
            className="input input-bordered input-primary form-control w-full max-w-md mb-3"
            {...register("name", { required: true })}
          />

          <input
            type="number"
            placeholder="Minimum Quantity"
            className="input input-bordered input-primary w-full form-control max-w-md mb-3"
            {...register("minQty", { required: true })}
          />
          <input
            type="number"
            placeholder="Available Quantity"
            className="input input-bordered input-primary w-full form-control max-w-md mb-3"
            {...register("availableQty", { required: true })}
          />
          <input
            type="number"
            placeholder="Price/unit"
            className="input input-bordered form-control input-primary w-full max-w-md mb-3"
            {...register("price", { required: true })}
          />
          <input
            type="text"
            placeholder="Image"
            className="input input-bordered input-primary form-control w-full max-w-md mb-3"
            {...register("img", { required: true })}
          />
          <textarea
            type="text"
            placeholder=" Tool Details"
            className="textarea textarea-primary form-control w-full mb-3 max-w-md"
            {...register("description", { required: true })}
          />

          <input
            type="submit"
            className="btn btn-neutral text-white w-full max-w-md mb-12 mt-5"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
