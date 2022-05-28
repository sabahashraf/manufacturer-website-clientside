import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Portfolio = () => {
  return (
    <div className="w-max-lg w-2/3 mx-auto my-16">
      <p className=" mb-2 ">
        <span className="font-bold">Name:</span> Sabah Sabrina Ashraf{" "}
      </p>
      <p className="mb-2 ">
        <span className="font-bold">Email:</span> sabahsabrina@yahoo.com{" "}
      </p>
      <p className=" mb-2">
        <span className="font-bold">Education:</span>
        <li>Diploma in website development,TAFE,Sydney,Australia</li>
        <li>Bsc in Electrical and Electronics Engineering,AUST,Bangladesh</li>
      </p>
      <p className=" ">
        <span className="font-bold">Skills:</span> I consider myself as a junior
        frontend developer.I can build web applications compatible for any
        modern devices with maintainable code.I am proficient in following
        modern technologies:
      </p>
      <ul className="my-5">
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> HTML</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> CSS</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Bootstrap</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Tailwind Css</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Javascript</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> React Js</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Node Js</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Php</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Mongo Db</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Sql Server</span>
        </li>{" "}
        <li className="flex items-center">
          <ArrowRightIcon className="h-5 w-5 text-secondary mr-2" />
          <span> Wordpress</span>
        </li>{" "}
      </ul>
      <p className="mb-5">
        {" "}
        <span className="font-bold ">Three of my previous projects:</span>
      </p>
      <ul>
        <li className="hover:text-secondary mb-2">
          <a
            className="border-b-2 border-secondary border-solid hover:border-0"
            href=" https://warehouse-management-ce18a.web.app/"
          >
            {" "}
            FurnitureWarehouse management
          </a>
        </li>
        <li className="hover:text-secondary mb-2 ">
          <a
            className="border-b-2 border-secondary border-solid hover:border-0"
            href=" https://maggie-s-daycare.web.app/home"
          >
            Ms Maggie's daycare
          </a>
        </li>
        <li className="hover:text-secondary mb-2">
          <a
            className="border-b-2 border-secondary border-solid hover:border-0"
            href=" https://car-analysis.netlify.app/"
          >
            Car Analysis
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
