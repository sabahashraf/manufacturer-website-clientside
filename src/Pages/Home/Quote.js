import React from "react";
import { toast } from "react-toastify";

const Quote = () => {
  const handleQuery = (event) => {
    event.preventDefault();

    toast("we'll get back to you shortly!");
  };
  return (
    <div>
      <div className=" ">
        <h2 className="text-4xl text-center font-bold  my-12">Your Query</h2>
        <form onSubmit={handleQuery} className="mt-12">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs form-control mb-5 mx-auto"
            name="name"
          />
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs form-control mb-5 mx-auto"
            name="email"
          />
          <textarea
            className="textarea textarea-bordered w-full max-w-xs form-control mb-5 mx-auto"
            placeholder="Message"
            name="message"
          ></textarea>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mb-12 ">
              Send Your Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Quote;
