import React from "react";
import styled from "styled-components";
import CardBackground from "../images/asset1.jpg";

const Wrapper = styled.div`
  background: url(${CardBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  background-size: 236% 107%;
  background-position: 60% 100%;
  min-width: 40%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding: 3em 2em 3em 3em;

  height: 100%;

  @media (min-width: 1024px) {
    flex: 1;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 0;
    padding: 5em 2em 3em 3em;
  }

  h1 {
    color: #fff;
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  p {
    color: #fff;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }
`;

function ImageCard() {
  return (
    <div className="d-none d-md-block image-card">
      <Wrapper>
        <div>
          <h1>Redefining mobile advertising</h1>
          <p>Please use this form to register.</p>
          <p>
            If you are a member, please <span>login.</span>
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default ImageCard;
