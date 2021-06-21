import React, { useContext } from "react";
import { MinusIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/solid";
import { ProductsContext } from "../context/context";

const Guest = ({ guest, ages }) => {
  const { setAdults, adults, setChild, child } = useContext(ProductsContext);

  return (
    <div className="my-8">
      <h3 className="font-medium text-gray-800">{guest}</h3>
      <p className="text-gray-400 ">{ages}</p>
      <div className="flex items-center mt-4">
        <MinusIcon
          className="w-6 h-6 border-2 rounded-sm cursor-pointer"
          onClick={guest === "adults" && setAdults(adults - 1)}
        />
        <span className="px-4">{guest === "adults" ? adults : child}</span>
        <PlusIcon
          className="w-6 h-6 border-2 rounded-sm cursor-pointer"
          onClick={guest === "children" && setChild(child - 1)}
        />
      </div>
    </div>
  );
};

export default Guest;
