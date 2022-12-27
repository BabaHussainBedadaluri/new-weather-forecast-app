import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { Geo_city_options, GET_CITY_URL } from "../../Api";
import "./search.css";

function Search(props) {
  let [search, setSearch] = useState(null);
  let handleSerachChange = (searchData) => {
    setSearch(searchData);

    props.onSearchChange(searchData);
  };
  let loadOptions = (inputValue) => {
    return fetch(
      `${GET_CITY_URL}/cities?namePrefix=${inputValue}`,
      Geo_city_options
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: ` ${city.name},${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleSerachChange}
        loadOptions={loadOptions}
      ></AsyncPaginate>
    </div>
  );
}

export default Search;
