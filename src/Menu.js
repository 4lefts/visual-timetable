import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledMenuWrapper = styled.div`
  z-index: 100;
  width: 100%;
`;

const StyledMenu = styled.div`
  list-style: none;
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

const Menu = ({ addCard, clearAll }) => {
  const subjects = [
    "art",
    "assembly",
    "computing",
    "DT",
    "English",
    "geography",
    "handwriting",
    "history",
    "home time",
    "languages",
    "lunch time",
    "maths",
    "music",
    "PE",
    "phonics",
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
    <StyledMenuWrapper id="menu-container">
      <StyledMenu>
        {subjects.map((subject) => (
          <StyledMenuButton key={subject} onClick={() => addCard(subject)}>
            {subject}
          </StyledMenuButton>
        ))}
        <StyledClearButton onClick={clearAll}>Clear all</StyledClearButton>
      </StyledMenu>
    </StyledMenuWrapper>
  );
};

export default Menu;
