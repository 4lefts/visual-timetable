import React from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import BaseButton from "./BaseButton";
import { ReactComponent as EditIcon } from "./icons/create-24px.svg";
import { ReactComponent as UpIcon } from "./icons/arrow_upward-24px.svg";

const Header = styled.header`
  position: relative;
`;

const StyledDate = styled.h2`
  margin: 20px;
`;

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const ordinal = (str) => {
  let n = parseInt(str);
  if (n > 3 && n < 21) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
};

const StyledOpenButton = styled(BaseButton)`
  position: absolute;
  top: -2px;
  right: 20px;
  width: 50px;
  height: 50px;
  z-index: 100;
  background-color: white;
  border-radius: 0 0 50% 50%;
  border: 2px solid;
  border-color: white dodgerblue dodgerblue dodgerblue;
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

const DateHeading = ({ toggleMenuState, menuIsOpen }) => {
  const d = new Date();
  const date = d.getDate();
  const dateString = d.toLocaleDateString("en-GB", dateOptions);
  const parsedDate = dateString.replace(date, ordinal(date)).replace(",", "");

  return (
    <Header>
      <StyledDate>{parsedDate}</StyledDate>
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
    </Header>
  );
};

export default DateHeading;
