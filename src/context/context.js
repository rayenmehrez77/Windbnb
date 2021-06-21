import React, { useState } from "react";
import data from "../stays.json";

export const ProductsContext = React.createContext();

// Provider, Consumer = ProductsContext.Provider

export const ProductsProvider = ({ children }) => {
  const [location, setLocation] = useState(true);
  const [guests, setGuests] = useState(false);
  const [country, setCountry] = useState("Finland");
  const [city, setCity] = useState("Helsinki");
  const [click, setClick] = useState(false);
  const [adults, setAdults] = useState(0);
  const [child, setChild] = useState(0);

  let places = data.map(({ city, country, id }) => ({
    id,
    country,
    city,
  }));

  const cities = places.filter(
    (el, idx, array) =>
      array.findIndex((t) => t.city === el.city && t.country === el.country) ===
      idx
  );

  const addLocation = (city, country) => {
    setCity(city);
    setCountry(country);
  };

  return (
    <ProductsContext.Provider
      value={{
        data,
        location,
        setLocation,
        guests,
        setGuests,
        cities,
        setCountry,
        setCity,
        city,
        country,
        addLocation,
        click,
        setClick,
        child,
        adults,
        setChild,
        setAdults,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
