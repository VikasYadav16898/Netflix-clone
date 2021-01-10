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
  img {
    height: 15rem;
    width: 10rem;
    overflow: hidden;
    object-fit: cover;
    border-radius: 1rem;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
