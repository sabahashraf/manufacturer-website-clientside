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
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Thank you for your review");
      });
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-12">Please add a review</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please give a rating (1-5)"
          class="input input-bordered w-full max-w-xs form-control mb-5 mx-auto"
          name="rating"
        />
        <textarea
          class="textarea textarea-bordered w-full max-w-xs form-control mb-5 mx-auto"
          placeholder="write something..."
          name="message"
        ></textarea>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mb-12 ">
            Add Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
