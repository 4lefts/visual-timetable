import React from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  list-style: none;
  margin: 0;
  padding: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 10px;
  background-color: white;
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

const Menu = ({ addCard, clearAll }) => {
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
    <StyledMenu>
      {subjects.map((subject) => (
        <StyledButton key={subject} onClick={() => handleClick(subject)}>
          {subject}
        </StyledButton>
      ))}
      <StyledClearButton onClick={clearAll}>Clear all</StyledClearButton>
    </StyledMenu>
  );
};

export default Menu;
