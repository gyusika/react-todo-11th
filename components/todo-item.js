import React from "react";
import styled from "styled-components";

export default function TodoItem({time, todo, id}) {
  return <Wrapper>
    <p >{time}</p>
    <p >{todo}
      <button>
        완료
      </button>
    </p>
</Wrapper>;
}

const Wrapper = styled.div`
  font-size: 18px;
  border: solid 1px;
    width: 100%;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    padding: 1rem 2rem;
    border-width: 1px;
    border-style: solid;
    border-color: black;
  `;