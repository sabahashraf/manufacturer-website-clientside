import React from "react";
import { SearchCircleIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/outline";

const Support = () => {
  return (
    <section>
      <h2 className="text-4xl text-center font-bold my-12">
        Quality guaranteed,competitive price,quick delivery
      </h2>
      <div className="flex  flex-row p-12 card shadow-xl">
        <div className="flex gap-2 items-center">
          <SearchCircleIcon className="h-16 w-16 text-accent" />
          <div>
            <h3 className="text-2xl font-bold">Rigorous testing</h3>
            <p>High quality products</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <PhoneIcon className="h-16 w-16 text-accent" />
          <div>
            <h3 className="text-2xl font-bold">Online Support 24/7</h3>
            <p>Support online 24/7</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ClockIcon className="h-16 w-16 text-accent" />
          <div>
            <h3 className="text-2xl font-bold">Just in time delivery</h3>
            <p>Punctual delivery</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <StarIcon className="h-16 w-16 text-accent" />
          <div>
            <h3 className="text-2xl font-bold">Quality qualified</h3>
            <p>Good quality is safer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
