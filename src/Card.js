import React from "react";
import styled from "styled-components";
import BaseButton from "./BaseButton";

const StyledCard = styled.li`
  position: relative;
  width: 175px;
  height: 175px;
  padding: 10px;
  background: white;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const RemoveButton = styled(BaseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Card = ({ id, subject, removeCard }) => {
  const handleClick = () => {
    removeCard(id);
  };
  return (
    <StyledCard>
      <div>{subject}</div>
      <RemoveButton onClick={handleClick}>&times;</RemoveButton>
    </StyledCard>
  );
};

export default Card;
