import React, { useEffect, useState } from "react";
import HomeReview from "./HomeReview";

const HomeReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">
        What our customers say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <HomeReview key={review._id} review={review}></HomeReview>
        ))}
      </div>
    </div>
  );
};

export default HomeReviews;
