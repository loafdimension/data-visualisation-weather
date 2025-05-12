import { useState } from "react";

function Search() {
  const [searchResult, setSearchResult] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          placeholder="Search by breed"
          type="text"
          onChange={handleChange}
        ></input>
      </form>
      <form className="search-form">
        <input placeholder="Search by temprament" type="text"></input>
      </form>
      <form className="search-form">
        <input placeholder="Search by country of origin" type="text"></input>
      </form>
      <input type="submit" value="Search"></input>
    </div>
  );
}

export default Search;
