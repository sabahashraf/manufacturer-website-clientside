import React from "react";
import background from "../../assets/images/Painting-power.jpg";

const Banner = () => {
  return (
    <section className="mt-12">
      <div
        className="hero "
        style={{ background: `url(${background})`, height: "70vh" }}
      >
        <div className="hero-overlay bg-opacity-60  "></div>
        <div className="hero-content text-start text-white">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              Leading Quality Paint Tools{" "}
            </h1>
            <p className="mb-5 text-xl">
              Power painting tools - Alogical choice for Quality painting
              tools.We devoted ourself in the industry more than 15years, as a
              leading paint tools manufacturer located in United State
            </p>
            <div className="text-center mt-3 ">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-primary text-white px-5 hover:btn-accent hover:text-white">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
