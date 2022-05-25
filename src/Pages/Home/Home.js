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
      <BusinessSummery></BusinessSummery>
      <div className="text-center my-12">
        <Link to="/quote">
          <button class="btn btn-wide btn-primary">Get A Free Quote </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
