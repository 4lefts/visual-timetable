import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import { CSSTransition } from "react-transition-group";
import { ReactComponent as DeleteIcon } from "./icons/delete-24px.svg";
import { ReactComponent as DragIcon } from "./icons/drag_handle-24px.svg";

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
  transition: box-shadow 0.3s ease;
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
  &.now {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  &.next {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  &.now::before {
    content: "Now";
    position: absolute;
    top: 5px;
    left: 5px;
    color: white;
    background-color: dodgerblue;
    padding: 2px;
    font-size: 0.9em;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  &.next::before {
    content: "Next";
    position: absolute;
    top: 5px;
    left: 5px;
    color: white;
    background-color: dodgerblue;
    padding: 2px;
    font-size: 0.9em;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    filter: brightness(1.2);
  }
`;

const IconButton = styled(BaseButton)`
  position: absolute;
  padding: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    height: 30px;
    .icon {
      transition: fill 0.3s ease;
    }
  }
  &.icon-button-enter {
    opacity: 0;
  }
  &.icon-button-enter-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }
  &.icon-button-exit {
    opacity: 1;
  }
  &.icon-button-exit-active {
    opacity: 0;
    transition: opacity 300ms ease;
  }
`;

const RemoveButton = styled(IconButton)`
  top: 0px;
  right: 0px;
  border-radius: 0 3px 0 3px;
  .icon {
    fill: tomato;
  }
  &:hover {
    background: tomato;
    filter: brightness(1);
    .icon {
      fill: white;
    }
  }
  &:active .icon {
    fill: tomato;
  }
`;

const DragHandle = styled(IconButton)`
  top: 0px;
  left: 0px;
  border-radius: 3px 0 3px 0;
  .icon {
    fill: dodgerblue;
  }
  &:hover {
    background: dodgerblue;
    filter: brightness(1);
    .icon {
      fill: white;
    }
  }
  &:active .icon {
    fill: dodgerblue;
  }
`;

const Card = ({
  id,
  subject,
  clickCard,
  index,
  removeCard,
  status,
  menuIsOpen,
}) => {
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeCard(id);
  };
  const handleClick = () => {
    if (!menuIsOpen) clickCard(index);
  };
  return (
    <StyledCard className={status} onClick={handleClick}>
      <img
        src={require(`./images/${subject}.svg`)}
        draggable="false"
        alt={subject}
      />
      <div>{subject}</div>
      <CSSTransition
        in={menuIsOpen}
        timeout={300}
        classNames="icon-button"
        unmountOnExit
      >
        <RemoveButton onClick={handleRemoveClick}>
          <DeleteIcon></DeleteIcon>
        </RemoveButton>
      </CSSTransition>
      <CSSTransition
        in={menuIsOpen}
        timeout={300}
        classNames="icon-button"
        unmountOnExit
      >
        <DragHandle className="handle">
          <DragIcon></DragIcon>
        </DragHandle>
      </CSSTransition>
    </StyledCard>
  );
};

export default Card;
