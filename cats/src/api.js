import axios from "axios";

const catsAPI = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images",
  headers: {
    "x-api-key":
      "live_xm435qjmKGZ8EV4Kl5uOynM1ByETva7H6iKbCwzBlyWuE3cKzlBsH9lMB6LzqtVZ",
  }
});

const breed = "asho";

const fetchCatImages = (breed) => {
  return catsAPI
    .get("/search", {
      params: {
        breed_ids: breed,
        limit: 5,
      },
    })
    .then((result) => {
      console.log(result);
    });
};

export { fetchCatImages };
