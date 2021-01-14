import axios from "axios";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import five from "../imgs/five.jpg";
import { imageURL, base_url, API_KEY } from "../api";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function MovieDescription({ movieId, setselectedMovie }) {
  console.log(movieId);
  const [movie, setmovie] = useState({});

  useEffect(() => {
    axios
      .get(
        base_url + "movie/" + movieId + API_KEY + "&append_to_response=videos"
      )
      .then((data) => setmovie(data.data));
  }, []);

  // console.log(movie.videos.results[0].key);

  return (
    <StyledContainer>
      <StyledMovieDescription>
        <h2>{movie.original_title}</h2>
        <h4>{movie.tagline}</h4>
        <StyledHeadInfo>
          <div className="head-info1">
            <h3>Populaity: {movie.popularity}</h3>
            <h4>Released: {movie.release_date}</h4>
          </div>
          <div className="sponsors">
            {movie.production_companies
              ? movie.production_companies.map((company) => (
                  <div className="img">
                    <img src={imageURL + company.logo_path} />
                  </div>
                ))
              : ""}
          </div>
        </StyledHeadInfo>
        <div className="img">
          <img src={movie ? imageURL + movie.poster_path : five} alt="" />
        </div>
        <div className="description">
          <p>{movie.overview}</p>
        </div>

        {movie.videos
          ? movie.videos.results.map((vid) => (
              <ReactPlayer
                width="100%"
                height="70vh"
                controls={true}
                url={
                  movie.videos
                    ? "https://www.youtube.com/watch?v=" + vid.key
                    : ""
                }
              />
            ))
          : ""}

        {/* <ReactPlayer
          url={
            movie
              ? "https://www.youtube.com/watch?v=" + movie.videos.results[0].key
              : ""
          }
        ></ReactPlayer> */}
        <div onClick={() => setselectedMovie("")} className="back-arrow">
          <h2>X</h2>
        </div>
      </StyledMovieDescription>
    </StyledContainer>
  );
}

const StyledMovieDescription = styled.div`
  margin: 0 10rem;
  padding: 2rem;
  position: relative;
  background: #2b2a2a;
  .img {
    text-align: center;
    width: 100%;
    img {
      width: 100%;
      height: 70vh;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  .back-arrow {
    position: fixed;
    top: 2rem;
    right: 5rem;
    color: red;
    cursor: pointer;
    border-radius: 10rem;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: red;
      color: white;
    }
  }
`;

const StyledHeadInfo = styled.div`
  display: flex;
  width: 100%;
  .head-info1 {
    flex-grow: 1;
    align-items: center;
  }
  .sponsors {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .img {
      background: white;
      padding: 0;
      width: 2rem;
      height: 2rem;
      border-radius: 5px;
      img {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
      }
    }
  }
`;

const StyledContainer = styled.div`
  background: rgba(43, 42, 42, 0.8);
  position: fixed;
  top: 0vh;
  left: 0;
  z-index: 10;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e42727;
  }
  &::-webkit-scrollbar-track {
    background-color: #242323;
  }
`;
