import React from "react";

import TodoInput from "../components/todo-input";
import TodoList from "../components/todo-list";

import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <Contents>
        <TodoInput />
        <TodoList />
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;

const Contents = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 20px 10px;
`;
