import React, { useEffect, useState } from "react";
import "./CategorySlice.css";
import axios, { Axios } from "axios";
import { useSelector } from "react-redux";

const CategorySlice = ({ heading }) => {
  const [Movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTQ2Y2E1ZTgyNjg1ZTBlNWNjZWU1YWZjNTAzZmYyZiIsInN1YiI6IjY1MDAwZGIyZDdkY2QyMDBjNTM2N2JhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qaUQDcQYazYDYga5Yd9T-UE_kd0qJxwRVuPdh9QIVdI",
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${heading.id}`,
        options
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div key={heading.id} className="CategorySliceContainer">
      <div className="Heading">{heading.name}</div>
      <div className="MovieTileContainer">
        {Movies
          ? Movies.map((m) => {
              return (
                <div key={m.id} className="MovieTiles">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default CategorySlice;
