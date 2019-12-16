import React from "react";
import styled from "styled-components";

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;

  .register-btn {
    background: #8635ae;
    border-radius: 4rem;
    text-transform: uppercase;
    color: #fff;
    padding: 0.8rem 2rem;
    font-weight: 500;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border: none;
    appearance: none;
  }
`;

function RegisterButton() {
  return (
    <ButtonWrap>
      <button type="submit" className="register-btn">
        Register
      </button>
    </ButtonWrap>
  );
}

export default RegisterButton;
