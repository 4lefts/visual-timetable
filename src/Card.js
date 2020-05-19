import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &.card-enter {
    opacity: 0;
  }
  &.card-enter-active {
    opacity: 1;
    transition: opacity 500ms ease;
  }
  &.card-exit {
    opacity: 1;
  }
  &.card-exit-active {
    opacity: 0;
    transition: opacity 500ms ease;
  }
`;

const RemoveButton = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
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
