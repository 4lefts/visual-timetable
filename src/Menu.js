import React, { useState } from "react";
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
  padding: 20px;
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: dodgerblue;
  transition: box-shadow 0.33s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover,
  &:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Menu = ({ addCard, clearAll }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(100);
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
