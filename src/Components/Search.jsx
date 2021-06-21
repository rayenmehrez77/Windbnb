import React, { useContext } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { ProductsContext } from "../context/context";

const Search = () => {
  const {
    location,
    setLocation,
    setGuests,
    guests,
    city,
    country,
    setClick,
    click,
  } = useContext(ProductsContext);

  return (
    <div className="bg-white">
      <form className="grid grid-cols-1 justify-center items-center mx-auto p-2 lg:grid-cols-3 md:grid-cols-2 ">
        <div
          className={`mx-auto w-full rounded-2xl p-2 cursor-pointer ${
            location ? "border-2 text-gray-800 " : "border-1 shadow"
          }`}
          onClick={() => {
            setLocation(!location);
          }}
          disabled={!location ? true : false}
        >
          <span className="block uppercase text-gray-900 font-bold text-xs">
            location
          </span>
          <span className="text-gray-400 font-normal">
            {click ? city + ", " + country : "Add Location"}
          </span>
        </div>
        <div
          className={`mx-auto border-1 w-full rounded-2xl p-2 cursor-pointer ${
            guests || click ? "border-2 text-gray-800" : "border-1 shadow"
          }`}
          onClick={() => {
            setLocation(location);
            setGuests(!guests);
          }}
        >
          <span className="block uppercase text-gray-900 font-bold text-xs">
            guests
          </span>
          <span className="text-gray-400 font-normal">Add Guests</span>
        </div>
        <button className="border-1 w-40 py-4 search-btn my-4" type="submit">
          <SearchIcon className="h-5 w-5 mr-2 text-white" />
          <span className="text-white font-medium">Search</span>
        </button>
      </form>
    </div>
  );
};

export default Search;
