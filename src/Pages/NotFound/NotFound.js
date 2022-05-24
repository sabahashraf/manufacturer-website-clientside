import React from "react";
import notFound from "../../assets/images/notFound.png";

const NotFound = () => {
  return (
    <div className="my-12 text-center">
      <img src={notFound} alt="page not found"></img>
    </div>
  );
};

export default NotFound;
