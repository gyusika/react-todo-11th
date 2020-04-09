import React, {useState} from "react";
import styled from "styled-components";

export default function TodoInput() {
  const [todos, setTodos] = useState([
  ]);

  const [input,setInput] = useState('');

  const handleSubmit = (e,todos,setTodos) => {
    e.preventDefault();

    let a1 = document.getElementById("time").value;
    let a2 = document.getElementById("todo").value;

    setTodos([...todos,{time:a1, todo:a2}])
  }

  return (
    <Wrapper>
      <form onSubmit={(e) => handleSubmit(e,todos,setTodos,input,setInput)}>
        <TimeWrapper>
          <label>시간</label>
          <input id="time"
            type="number" placeholder="날짜를 입력하세요 (ex.20200404)" ></input>
        </TimeWrapper>
        <TodoWrapper>
          <label>TODO</label>
          <input id="todo"
            type="text" placeholder="할 일을 입력하세요"></input>
            <br/>
        </TodoWrapper>
        <button>등록</button>
      </form>
        {todos.map(a => {
              return (
                <div>
                  {a.time}{a.todo}
                </div>
              )
              })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  height: 37rem;
  flex: 1 1 0%;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 1rem 2rem;
`;

const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
`;
