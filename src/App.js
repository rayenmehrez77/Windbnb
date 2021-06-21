import logo from "./images/logo.png";
import { SearchIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import Product from "./Components/Product";
import { useContext, useState } from "react";
import { ProductsContext } from "./context/context";
import Search from "./Components/Search";
import Guest from "./Components/Guest";

function App() {
  const {
    data,
    location,
    guests,
    cities,
    city,
    country,
    addLocation,
    setLocation,
    setClick,
    click,
  } = useContext(ProductsContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between p-10 ">
        <img src={logo} alt="logo" className="h-5 object-contain" />
        <div className="flex items-center	space-x-4 shadow-lg p-2 rounded-lg ">
          <span className="border-r-2 pr-2">
            {city}, {country}
          </span>
          <button
            className="border-r-2 pr-2 text-gray-500 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            Add guests
          </button>
          <SearchIcon className="h-5 w-5 text-red-500" />
        </div>
      </header>
      {open ? (
        <div className="min-h-80 mx-8">
          <Search />
          <div className="grid grid-cols-3">
            {location ? (
              <div className="px-2 my-4">
                {cities.map(({ city, country, id }) => (
                  <div
                    className="flex py-3 cursor-pointer"
                    key={id}
                    onClick={() => {
                      addLocation(city, country);
                      setLocation(!location);
                      setClick(!click);
                    }}
                  >
                    <LocationMarkerIcon className="h-5 w-5" />
                    <h2 className="ml-2">
                      {city}, {country}
                    </h2>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
            {guests || click ? (
              <div>
                <Guest guest="Adults" ages="Ages 13 or above" />
                <Guest guest="Children" ages="Ages 2-12" />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-between items-center ml-12 mr-12 mt-8 mb-8">
        <h1 className="font-semibold text-2xl"> Stays in {country}</h1>
        <span className="font-bold">{data.length}+ stays</span>
      </div>
      <div className="grid grid-cols-1 gap-8 mx-12 justify-center md:grid-cols-2 lg:grid-cols-3">
        {data.map(({ id, ...otherProps }) => (
          <Product key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
}

export default App;
