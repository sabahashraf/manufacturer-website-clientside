import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";
import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { SupportIcon } from "@heroicons/react/solid";

import { ThumbUpIcon } from "@heroicons/react/solid";

const BusinessSummery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 my-12 bg-green-100">
      <ul className=" p-12 text-center">
        <li>
          <UserGroupIcon className="h-12 w-12 text-secondary mx-auto" />
          <p className="text-3xl font-bold">100+</p>
        </li>
        <li>
          <p className="text-2xl  text-secondary">customers</p>
        </li>
      </ul>
      <ul className=" p-12 text-center">
        <li>
          <CurrencyDollarIcon className="h-12 w-12 text-secondary mx-auto" />
          <p className="text-3xl font-bold">120M+</p>
        </li>
        <li>
          <p className="text-2xl  text-secondary">Annual revenue</p>
        </li>
      </ul>
      <ul className=" p-12 text-center">
        <li>
          <ThumbUpIcon className="h-12 w-12 text-secondary mx-auto" />
          <p className="text-3xl font-bold">33K+</p>
        </li>
        <li>
          <p className="text-2xl  text-secondary">Reviews</p>
        </li>
      </ul>
      <ul className=" p-12 text-center">
        <li>
          <SupportIcon className="h-12 w-12 text-secondary mx-auto" />
          <p className="text-3xl font-bold">50K+</p>
        </li>
        <li>
          <p className="text-2xl  text-secondary">Tools</p>
        </li>
      </ul>
    </div>
  );
};

export default BusinessSummery;
