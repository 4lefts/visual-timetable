import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledMenu = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 20px;
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 10px;
  background-color: white;
  &.menu-enter {
    transform: translateY(-110%);
  }
  &.menu-enter-active {
    transform: translateY(0);
    transition: all 500ms ease;
  }
  &.menu-exit {
  }
  &.menu-exit-active {
    transform: translateY(-110%);
    transition: all 500ms ease;
  }
`;

const StyledMenuButton = styled(BaseButton)`
  background-color: dodgerblue;
  color: white;
  font-size: 0.9em;
  padding: 5px;
`;

const StyledClearButton = styled(StyledMenuButton)`
  background-color: tomato;
  color: white;
  font-size: 0.9em;
  padding: 5px;
`;

const StyledOpenButton = styled(BaseButton)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Menu = ({ addCard, clearAll }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const subjects = [
    "art",
    "assembly",
    "DT",
    "English",
    "geography",
    "history",
    "home time",
    "languages",
    "lunch",
    "maths",
    "music",
    "PE",
    "play time",
    "PSHE",
    "RE",
    "register",
    "reading",
    "science",
    "story time",
    "test",
  ];

  return (
    <div>
      <CSSTransition
        in={menuIsOpen}
        unmountOnExit
        timeout={500}
        classNames="menu"
      >
        <StyledMenu>
          {subjects.map((subject) => (
            <StyledMenuButton key={subject} onClick={() => addCard(subject)}>
              {subject}
            </StyledMenuButton>
          ))}
          <StyledClearButton onClick={clearAll}>Clear all</StyledClearButton>
        </StyledMenu>
      </CSSTransition>
      <StyledOpenButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {menuIsOpen ? "Close" : "Open"}
      </StyledOpenButton>
    </div>
  );
};

export default Menu;
