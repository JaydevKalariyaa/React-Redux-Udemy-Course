import React from "react";
import Todo from "./Todo";
import Section from "./Section.jsx";
import { styled } from "styled-components";
import Temp from "./Temp.jsx";

const Container = styled.div`
  .container {
    background-color: rgb(6, 56, 6);
    color: ${(props) => (props.condition ? "white" : "yellow")};
    margin: auto;
    width: 50%;
    padding: 10rem 10rem;

    button {
      background-color: pink;
      &:hover {
        background-color: red;
      }
    }
  }
  & p {
    color: red;
  }
`;

// don't remove the export keyword here!
export const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  let condition = false;
  return (
    <>
      <Container condition={condition}>
        <Section className="container" style={{ color: "orange" }}>
          <p>hello</p>;<button>hello</button>
          {DUMMY_TODOS.map((curr) => {
            return <Todo text={curr} />;
          })}
        </Section>
        <Temp />
      </Container>
    </>
  );
}
