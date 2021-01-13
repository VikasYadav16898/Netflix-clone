import React from "react";
import Carousel from "react-elastic-carousel";
import MovieGallery from "./MovieGallery";
import { imageURL } from "../api";
import styled from "styled-components";
import { base_url, API_KEY } from "../api";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieListSlider({ genre, genreId }) {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    axios.get(base_url + "list/" + genreId + API_KEY).then((data) => {
      setmovieList(data.data.items);
    });
  }, []);
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
          >
            {movieList.map((movie) => (
              <MovieGallery
                url={imageURL + movie.poster_path}
                id={movie.id}
                key={movie.id}
                title={movie.title}
                description={movie.overview}
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
    margin: 0 3rem;
    color: white;
    text-shadow: 2px 2px 4px black;
  }
`;
