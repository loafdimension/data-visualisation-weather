import { useEffect } from "react";
import Search from "./Search";
import { useState } from "react";

function CatContent() {
  

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds?limit=10&page=0`);
  }, [])
    .then((result) => {
      result.json();
    })
    .then((data) => {
      console.log(data, "<<<< data");
      setBreedSearchResult(result);
    });

  return (
    <div>
      <Search />
    </div>
  );
}

export default CatContent;
