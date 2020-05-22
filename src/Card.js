import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import { ReactComponent as CloseIcon } from "./icons/close-24px.svg";

const StyledCard = styled.li`
  position: relative;
  width: 175px;
  height: 175px;
  padding: 10px;
  background: white;
  font-size: 1.4em;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  img {
    max-width: 105px;
    margin-bottom: 10px;
  }
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
  top: 5px;
  right: 5px;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 20px;
    height: 20px;
    .icon {
      fill: grey;
      transition: fill 0.3s ease;
    }
  }
  &:hover {
    filter: brightness(1);
    .icon {
      fill: tomato;
    }
  }
  &:active .icon {
    fill: tomato;
  }
`;

const Card = ({ id, subject, removeCard }) => {
  const handleClick = () => {
    removeCard(id);
  };
  return (
    <StyledCard>
      <img src={require(`./images/${subject}.svg`)} />
      <div>{subject}</div>
      <RemoveButton onClick={handleClick}>
        <CloseIcon></CloseIcon>
      </RemoveButton>
    </StyledCard>
  );
};

export default Card;
