import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { movieTrendList, imageURL, genres } from "../api";
import Carousel, { consts } from "react-elastic-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import CarousalMain from "./CarousalMain";
import MovieListSlider from "./MovieListSlider";
import MovieDescription from "./MovieDescription";
import leftArrow from "../imgs/left-arrow.png";
import rightArrow from "../imgs/right-arrow.png";
import { motion } from "framer-motion";
import { topCarousalAnimation, ListAnimation } from "../animations";

export default function Main() {
  const [TrendMovieList, setTrendMovieList] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [selectedMovie, setselectedMovie] = useState("");
  //Getting Data
  const getData = () => {
    axios
      .get(movieTrendList)
      .then((data) => setTrendMovieList(data.data.results))
      .catch((err) => console.log(err));

    axios
      .get(genres)
      .then((data) => setGenres(data.data.genres))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  //Handlers
  if (selectedMovie !== "") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Styledimg src={leftArrow} alt="" />
      ) : (
        <Styledimg src={rightArrow} alt="" />
      );
    return (
      <StyledCarousalDiv onClick={onClick} disabled={isEdge}>
        {pointer}
      </StyledCarousalDiv>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      {selectedMovie === "" ? (
        ""
      ) : (
        <MovieDescription
          movieId={selectedMovie}
          setselectedMovie={setselectedMovie}
        />
      )}
      <StyledHeaderCorousel
        variants={topCarousalAnimation}
        initial="hidden"
        animate="show"
      >
        <Carousel
          outerSpacing={0}
          pagination={false}
          enableAutoPlay={true}
          renderArrow={myArrow}
        >
          {TrendMovieList.map((movie) => (
            <CarousalMain
              title={movie.title}
              description={movie.overview}
              imgSrc={imageURL + movie.poster_path}
              id={movie.id}
              key={movie.id}
              setselectedMovie={setselectedMovie}
            />
          ))}
        </Carousel>
      </StyledHeaderCorousel>
      <motion.div
        variants={ListAnimation}
        initial="hidden"
        animate="show"
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
            setselectedMovie={setselectedMovie}
            myArrow={myArrow}
          />
        ))}
      </motion.div>
    </div>
  );
}

const StyledHeaderCorousel = styled(motion.div)`
  background: #2b2a2a;
  height: 70vh;
  width: 100%;
`;
const StyledCarousalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Styledimg = styled.img`
  cursor: pointer;
  border-radius: 50px;
  padding: 0.5rem;
  &:hover {
    background: white;
  }
`;
