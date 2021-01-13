import React, { useState } from "react";
import styled from "styled-components";
import MovieGallery from "./MovieGallery";
import axios from "axios";
import { movieTrendList, imageURL } from "../api";
import Carousel from "react-elastic-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import CarousalMain from "./CarousalMain";

export default function Main() {
  const [TrendMovieList, setTrendMovieList] = useState([]);
  //Getting Data
  axios
    .get(movieTrendList)
    .then((data) => setTrendMovieList(data.data.results));

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
      <div>
        <h2>Trending</h2>
      </div>
      <StyledMovieList>
        <Carousel itemsToShow={8} itemsToScroll={4} pagination={false}>
          {TrendMovieList.map((movie) => (
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
    </div>
  );
}

const StyledHeaderCorousel = styled.div`
  background: #2b2a2a;
  height: 70vh;
  width: 100%;
`;

const StyledMovieList = styled.div`
  background: skyblue;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
`;
const StyledMovieListContainer = styled.div`
  overflow: hidden;
`;

const StyledCarousel = styled(Carousel)``;

const StyledMovieInfo = styled.div`
  background: transparent;
`;
