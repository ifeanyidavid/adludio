import React from "react";
import styled from "styled-components";

import MainBackground from "./images/asset2.png";
import "./App.css";
import ImageCard from "./components/ImageCard";
import GoogleButton from "./components/GoogleButton";
import RegisterButton from "./components/RegisterButton";
import FormGroup from "./components/FormGroup";
import Branding from "./components/Branding";

const Limiter = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;

  background: url(${MainBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  background: #fff;
  width: 90%;
  border-radius: 2rem;
  height: 100%;

  box-sizing: border-box;

  @media (min-width: 1024px) {
    max-height: 600px;
    display: flex;
    width: 70%;
  }
`;

const Form = styled.div`
  flex: 2;
  min-width: 60%;
  box-sizing: border-box;
  padding: 2rem;

  @media (min-width: 1024px) {
    padding: 4rem;
  }

  form {
    margin-top: 2.5rem;
  }

  .form-header {
    color: rgba(0, 0, 0, 0.65);
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
`;

function App() {
  const inputFields = [
    { type: "text", id: "full-name", label: "Full Name" },
    { type: "text", id: "email", label: "Email" },
    { type: "password", id: "password", label: "Password" }
  ];

  const FormGroups = inputFields.map((inputField, id) => (
    <FormGroup
      key={id}
      type={inputField.type}
      id={inputField.id}
      label={inputField.label}
    />
  ));

  return (
    <div className="page">
      <Limiter>
        <Container>
          <Card>
            <ImageCard />
            <Form>
              <div>
                <Branding />
                <form>
                  <p className="form-header">Register</p>
                  {FormGroups}
                  <RegisterButton />
                  <GoogleButton />
                </form>
              </div>
            </Form>
          </Card>
        </Container>
      </Limiter>
    </div>
  );
}

export default App;
