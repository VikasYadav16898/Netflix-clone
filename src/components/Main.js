import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { movieTrendList, imageURL, genres } from "../api";
import Carousel from "react-elastic-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import CarousalMain from "./CarousalMain";
import MovieListSlider from "./MovieListSlider";
import { logDOM } from "@testing-library/react";

export default function Main() {
  const [TrendMovieList, setTrendMovieList] = useState([]);
  const [Genres, setGenres] = useState([]);
  //Getting Data
  useEffect(() => {
    axios
      .get(movieTrendList)
      .then((data) => setTrendMovieList(data.data.results));

    axios.get(genres).then((data) => setGenres(data.data.genres));
  }, []);

  console.log(Genres);
  //Handlers

  return (
    <div>
      <StyledHeaderCorousel>
        <Carousel outerSpacing={0} pagination={false} enableAutoPlay={true}>
          {TrendMovieList.map((movie) => (
            <CarousalMain
              title={movie.title}
              description={movie.overview}
              imgSrc={imageURL + movie.poster_path}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </Carousel>
      </StyledHeaderCorousel>
      <div
        style={{
          boxShadow: "0px -5px 10px red",
          zIndex: "10",
          borderRadius: "2rem",
          overflow: "hidden",
          padding: "1rem 0.5rem",
        }}
      >
        {Genres.map((genre) => (
          <MovieListSlider
            genre={genre.name}
            genreId={genre.id}
            key={genre.id}
            movieList={TrendMovieList}
          />
        ))}
      </div>
    </div>
  );
}

const StyledHeaderCorousel = styled.div`
  background: #2b2a2a;
  height: 70vh;
  width: 100%;
`;
