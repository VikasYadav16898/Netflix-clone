import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h3>
        Made with 💖 by <span>Yaduveera</span>!
      </h3>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 100%;
  margin-top: 1rem;
  background: #252525;
  h3 {
    color: white;
    font-weight: lighter;
    span {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
