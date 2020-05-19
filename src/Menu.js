import React, { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledMenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: -${(props) => props.menuHeight}px 0;
  transition: margin 0.5s;
  &.open {
    margin: 0 0;
  }
`;

const StyledMenu = styled.div`
  z-index: 100;
  list-style: none;
  margin: 0;
  padding: 10px;
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 10px;
  background-color: white;
  border-bottom: 2px solid dodgerblue;
`;

const StyledMenuButton = styled(BaseButton)`
  padding: 5px;
  background-color: dodgerblue;
  color: white;
  font-size: 0.9em;
`;

const StyledClearButton = styled(StyledMenuButton)`
  padding: 5px;
  background-color: tomato;
  color: white;
  font-size: 0.9em;
`;

const StyledOpenButton = styled(BaseButton)`
  width: 50px;
  height: 50px;
  margin: 0 20px 0 auto;
  background-color: white;
  border-radius: 0 0 50% 50%;
  border: 2px solid;
  border-color: white dodgerblue dodgerblue dodgerblue;
  transform: translateY(-2px);
`;

const Menu = ({ addCard, clearAll }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(100);
  useEffect(() => {
    // set negative margin on menu container to menu container height - button height
    setMenuHeight(document.querySelector("#menu-container").offsetHeight - 45);
  });
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
    <StyledMenuWrapper
      id="menu-container"
      menuHeight={menuHeight}
      className={menuIsOpen ? "open" : ""}
    >
      <StyledMenu>
        {subjects.map((subject) => (
          <StyledMenuButton key={subject} onClick={() => addCard(subject)}>
            {subject}
          </StyledMenuButton>
        ))}
        <StyledClearButton onClick={clearAll}>Clear all</StyledClearButton>
      </StyledMenu>
      <StyledOpenButton onClick={() => setMenuIsOpen(!menuIsOpen)}>
        {menuIsOpen ? "Close" : "Open"}
      </StyledOpenButton>
    </StyledMenuWrapper>
  );
};

export default Menu;
