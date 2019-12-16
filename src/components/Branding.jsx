import React from "react";
import styled from "styled-components";
import AdludioLogo from "../images/asset3.png";

const Wrapper = styled.div`
  img {
    width: 100px;
  }
`;

function Branding() {
  return (
    <Wrapper>
      <img src={AdludioLogo} className="img-fluid branding" alt="Adludio Logo" />
    </Wrapper>
  );
}

export default Branding;
