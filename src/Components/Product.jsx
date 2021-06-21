import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Product = ({
  city,
  country,
  photo,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
}) => {
  return (
    <div>
      <img
        src={photo}
        alt=""
        className="w-full h-80 object-cover rounded-2xl"
      />
      <div className="my-2 flex items-center justify-between">
        <div className="flex items-center">
          {superHost ? (
            <span className="font-bold text-gray-600 uppercase mr-2 border-2 p-1 text-sm rounded-xl">
              Super host.
            </span>
          ) : (
            ""
          )}
          <span className="text-gray-500">
            {type} {beds ? beds + " beds" : ""}
          </span>
        </div>
        <div className="flex w-12 items-center">
          <StarIcon className="text-red-500 h-5 w-5 " />
          <span className="text-gray-800 font-bold">{rating}</span>
        </div>
      </div>
      <p className="font-bold text-gray-800">{title}</p>
    </div>
  );
};

export default Product;
