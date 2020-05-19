import styled from "styled-components";

const BaseButton = styled.button`
  font-family: inherit;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
  border: none;
  outline: none;
  border-radius: 3px;
  transition: filter 330ms;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;

export default BaseButton;
