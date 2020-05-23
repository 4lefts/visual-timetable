import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import BaseButton from "./BaseButton";
import { ReactComponent as EditIcon } from "./icons/create-24px.svg";
import { ReactComponent as UpIcon } from "./icons/arrow_upward-24px.svg";

const StyledMenuWrapper = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  margin: -${(props) => props.menuHeight}px 0;
  transition: margin 0.5s;
  &.open {
    margin: 0 0;
  }
`;

const StyledMenu = styled.div`
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const StyledMenuButton = styled(BaseButton)`
  padding: 5px;
  background-color: dodgerblue;
  color: white;
  font-size: 0.9em;
  text-transform: capitalize;
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
  overflow: hidden;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  svg .icon {
    fill: dodgerblue;
  }
  .menu-closed-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-closed-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .menu-closed-exit {
    position: absolute;
  }
  .menu-closed-exit-active {
    transform: translateX(-110%);
    transition: all 0.5s ease;
  }

  .menu-open-enter {
    position: absolute;
    transform: translateX(110%);
  }
  .menu-open-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  .menu-open-exit {
    position: absolute;
  }
  .menu-open-exit-active {
    transform: translateX(110%);
    transition: all 0.5s ease;
  }
`;

const Menu = ({ addCard, clearAll, menuIsOpen, toggleMenuState }) => {
  // const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(100);
  useEffect(() => {
    // set negative margin on menu container to menu container height - button height
    setMenuHeight(getMenuHeight() - 46);

    // set a listener on window resizse resize
    // use this setTimeout to debounce resize events
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setMenuHeight(getMenuHeight()), 150);
    };
    window.addEventListener("resize", resizeListener);
    // clean up function
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  });

  const getMenuHeight = () =>
    document.querySelector("#menu-container").offsetHeight;

  const subjects = [
    "art",
    "assembly",
    "DT",
    "English",
    "geography",
    "history",
    "home time",
    "languages",
    "lunch time",
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
      <StyledOpenButton onClick={toggleMenuState}>
        <CSSTransition
          in={!menuIsOpen}
          unmountOnExit
          timeout={500}
          classNames="menu-closed"
        >
          <EditIcon></EditIcon>
        </CSSTransition>
        <CSSTransition
          in={menuIsOpen}
          unmountOnExit
          timeout={500}
          classNames="menu-open"
        >
          <UpIcon></UpIcon>
        </CSSTransition>
      </StyledOpenButton>
    </StyledMenuWrapper>
  );
};

export default Menu;
