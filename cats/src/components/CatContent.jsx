import { useEffect } from "react";
import Search from "./Search";
import { useState } from "react";
import { fetchCatImages } from "../api";

function CatContent() {
  const [catList, setCatList] = useState([]);
  const [err, setErr] = useState(null);
  const [searchQuery, setSearchQuery] = useState({ breed: "" });

  useEffect(() => {
    fetchCatImages()
      .then((catsFromAPI) => {
        setCatList(catsFromAPI);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });
  }, []);
  console.log(searchQuery, "<<< search query");

  if (err) {
    return <Error err={err} />;
  }

  return (
    <div>
      <Search setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default CatContent;
