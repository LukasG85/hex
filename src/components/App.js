import React from "react";
import Form from "./form/Form";
import "../App.css";
import styled from "styled-components";
import img from "../img/restaurant4.jpg";

function App() {
  return (
    <AppWrapper bcgImage={img}>
      <Form />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(30, 30, 30, 0.5),
      rgba(30, 30, 30, 0.5)
    ),
    url(${props => props.bcgImage}) no-repeat top center;
  background-size: cover;
`;
