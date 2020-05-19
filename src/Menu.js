import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const StyledMenu = styled.div`
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
    position: absolute;
    transform: translateY(-110%);
  }
  &.menu-enter-active {
    transform: translateY(0);
    transition: all 500ms ease;
  }
  &.menu-exit {
    position: absolute;
  }
  &.menu-exit-active {
    transform: translateY(-110%);
    transition: all 500ms ease;
  }
`;

const StyledButton = styled.button`
  background-color: dodgerblue;
  color: white;
  font-family: inherit;
  font-size: 0.9em;
  margin: 0;
  padding: 5px;
  border: none;
  border-radius: 3px;
  transition: filter 330ms;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

const StyledClearButton = styled(StyledButton)`
  background-color: tomato;
`;

const StyledOpenButton = styled(StyledButton)`
  position: fixed;
  right: 30px;
  bottom: 30px;
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

  const handleClick = (subject) => addCard(subject);

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
            <StyledButton key={subject} onClick={() => handleClick(subject)}>
              {subject}
            </StyledButton>
          ))}
          <StyledClearButton onClick={clearAll}>Clear all</StyledClearButton>
        </StyledMenu>
      </CSSTransition>
      <StyledOpenButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {menuIsOpen ? "Close Menu" : "Open Menu"}
      </StyledOpenButton>
    </div>
  );
};

export default Menu;
