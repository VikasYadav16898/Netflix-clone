import React, { useState } from "react";
import styled from "styled-components";
import MovieGallery from "./MovieGallery";
import axios from "axios";
import { movieTrendList, imageURL } from "../api";
import Carousel from "react-elastic-carousel";

export default function Main() {
  const [TrendMovieList, setTrendMovieList] = useState([]);

  axios
    .get(movieTrendList)
    .then((data) => setTrendMovieList(data.data.results));
  return (
    <div>
      <StyledHeaderCorousel>
        <Carousel>
          {TrendMovieList.map((movie) => (
            <img
              src={imageURL + movie.poster_path}
              id={movie.id}
              key={movie.id}
              alt="carousel"
            />
          ))}
        </Carousel>
      </StyledHeaderCorousel>
      <StyledMovieList>
        {TrendMovieList.map((movie) => (
          <MovieGallery
            url={imageURL + movie.poster_path}
            id={movie.id}
            key={movie.id}
          />
        ))}
      </StyledMovieList>
    </div>
  );
}

const StyledHeaderCorousel = styled.div`
  background: pink;
  min-height: 40vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledMovieList = styled.div`
  background: skyblue;
  min-height: 10vh;
  width: 100%;
  position: relative;
  top: 30vh;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
`;
