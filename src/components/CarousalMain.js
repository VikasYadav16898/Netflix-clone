import React from "react";
import styled from "styled-components";

export default function CarousalMain({
  title,
  description,
  imgSrc,
  id,
  setselectedMovie,
}) {
  return (
    <StyledCarousalMain onClick={() => setselectedMovie(id)}>
      <div className="info">
        <h1>{title ? title : "Title not Available."}</h1>
        <h3>{description.slice(0, 350)}...</h3>
      </div>
      <div className="image-container">
        <img src={imgSrc} alt="xyz" />
      </div>
    </StyledCarousalMain>
  );
}

const StyledCarousalMain = styled.div`
  width: 100%;
  height: 70vh;
  padding: 1rem;
  position: relative;
  border-radius: 2rem;
  cursor: pointer;
  .image-container {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 2rem;
    }
  }
  .info {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 20%;
    left: 10%;
    color: white;
    text-align: left;
    text-shadow: 2px 2px black;
    overflow: hidden;
    h1 {
      font-size: 6rem;
    }
    h3 {
      color: white;
      text-shadow: 2px 2px black;
      font-weight: lighter;
    }
  }
`;
