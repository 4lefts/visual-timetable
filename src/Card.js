import React from "react";
import styled from "styled-components";

const StyledCard = styled.li`
  position: relative;
  width: 175px;
  height: 175px;
  padding: 10px;
  background: white;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 3px solid skyblue;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  border: none;
  outline: none;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: tomato;
    color: white;
  }
`;

const Card = ({ id, subject, removeCard }) => {
  const handleClick = () => {
    removeCard(id);
  };
  return (
    <StyledCard>
      <div>{subject}</div>
      <RemoveButton onClick={handleClick}>&times;</RemoveButton>
    </StyledCard>
  );
};

export default Card;
