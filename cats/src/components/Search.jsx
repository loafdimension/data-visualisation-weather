import { useState } from "react";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery, "<<< search query");
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search by breed"
          name="breed-type"
          type="text"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Search by temprament"
          name="temprament-type"
          type="text"
        ></input>
        <input
          placeholder="Search by country of origin"
          name="country-of-origin-type"
          type="text"
        ></input>
        <input type="submit" value="Search"></input>
      </form>
    </>
  );
};

export default Search;
