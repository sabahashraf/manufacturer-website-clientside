import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      rating: event.target.rating.value,
      message: event.target.message.value,
    };
    event.target.reset();
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Thank you for your review");
      });
  };
  return (
    <div className="mx-auto w-2/3">
      <h2 className="text-3xl font-bold text-primary my-12 text-center">
        Please add a review
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please give a rating (1-5)"
          className="input input-bordered w-full max-w-md form-control mb-5 mx-auto"
          name="rating"
        />
        <textarea
          className="textarea textarea-bordered w-full max-w-md form-control mb-5 mx-auto"
          placeholder="write something..."
          name="message"
        ></textarea>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-neutral text-white hover:btn-accent hover:text-white mb-12 mt-5 w-full max-w-xs"
          >
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
