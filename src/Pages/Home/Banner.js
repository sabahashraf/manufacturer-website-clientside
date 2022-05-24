import React from "react";
import background from "../../assets/images/Painting-power.jpg";

const Banner = () => {
  return (
    <section>
      <div
        class="hero "
        style={{ background: `url(${background})`, height: "60vh" }}
      >
        <div class="hero-overlay bg-opacity-60 "></div>
        <div class="hero-content text-start text-white">
          <div class="">
            <h1 class="mb-5 text-5xl font-bold">
              Leading Quality Paint Tools{" "}
            </h1>
            <p class="mb-5 text-xl">
              Power painting tools - Alogical choice for Quality painting
              tools.We devoted ourself in the industry more than 15years, as a
              leading paint tools manufacturer located in United State
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
