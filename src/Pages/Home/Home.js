import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import BusinessSummery from "./BusinessSummery";
import HomeReviews from "./HomeReviews";
import Support from "./Support";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Support></Support>
      <Tools></Tools>
      <HomeReviews></HomeReviews>

      <div className="p-12 card shadow-xl text-center my-12">
        <Link to="/quote">
          <button className="btn btn-wide btn-primary text-white hover:btn-accent hover:text-white ">
            Get A Free Quote{" "}
          </button>
        </Link>
      </div>
      <BusinessSummery></BusinessSummery>
    </div>
  );
};

export default Home;
