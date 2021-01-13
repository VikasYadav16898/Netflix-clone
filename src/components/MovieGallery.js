import React from "react";
import styled from "styled-components";

export default function MovieGallery({ url }) {
  return (
    <StyledCard>
      <img src={url} alt="Image" />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding-top: 8px;
  padding-right: 8px;
  cursor: pointer;
  img {
    height: 15rem;
    width: 10rem;
    overflow: hidden;
    object-fit: cover;
    border-radius: 1rem;
    transition: all 0.5s ease-in-out;
    box-shadow: 2px 2px 6px white;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
