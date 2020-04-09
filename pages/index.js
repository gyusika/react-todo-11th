import React from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";
import TodoItem from "../components/todo-item";

import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Title>리액트=투두</Title>
      <Contents>
        <TodoInput />
        <TodoList />
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
    min-height: 100vh;
    background-color: rgb(155, 197, 195);
    padding: 4rem 5rem;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  padding: 0px;
  margin: 0px 0px 3rem;
`;

const Contents = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 20px 10px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
