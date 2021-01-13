import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <div>
      <StyledNav>
        <div className="icon">
          <h2>Netflix</h2>
        </div>
        <ul>
          <li>Contact</li>
          <li>Vikas</li>
        </ul>
      </StyledNav>
    </div>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  height: 10vh;
  background: #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;
  border-radius: 1rem;
  .icon {
    flex-grow: 2;
    cursor: pointer;
    h2 {
      color: red;
      font-weight: bolder;
      text-shadow: 2px 2px black;
    }
  }
  ul {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      color: white;
      font-size: 1.5rem;
      text-shadow: 1px 1px black;
      cursor: pointer;
    }
  }
`;
