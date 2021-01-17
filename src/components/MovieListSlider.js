import React from "react";
import Carousel from "react-elastic-carousel";
import MovieGallery from "./MovieGallery";
import { imageURL } from "../api";
import styled from "styled-components";
import { base_url, API_KEY } from "../api";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieListSlider({
  genre,
  genreId,
  setselectedMovie,
  myArrow,
}) {
  const [movieList, setmovieList] = useState([]);

  const getData = () => {
    axios
      .get(base_url + "list/" + genreId + API_KEY)
      .then((data) => {
        setmovieList(data.data.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  //Breakpoints of viewPort
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 8, itemsToScroll: 3 },
  ];

  return (
    movieList.length > 8 && (
      <StyledMovieListSlider>
        <h2>{genre}</h2>
        <StyledMovieList>
          <Carousel
            itemsToShow={8}
            itemsToScroll={4}
            pagination={false}
            focusOnSelect={true}
            renderArrow={myArrow}
            breakPoints={breakPoints}
          >
            {movieList.map((movie) => (
              <MovieGallery
                url={imageURL + movie.poster_path}
                id={movie.id}
                key={movie.id}
                title={movie.title}
                description={movie.overview}
                setselectedMovie={setselectedMovie}
              />
            ))}
          </Carousel>
        </StyledMovieList>
      </StyledMovieListSlider>
    )
  );
}

const StyledMovieList = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledMovieListSlider = styled.div`
  background: #2b2a2a;
  h2 {
    margin: 1rem 3rem;
    color: white;
    text-shadow: 2px 2px 4px black;
  }
`;
