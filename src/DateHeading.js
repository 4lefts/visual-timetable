import React from "react";
import styled from "styled-components";

const StyledDate = styled.h2`
  margin: 20px;
`;

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const DateHeading = () => {
  const d = new Date().toLocaleDateString("en-GB", dateOptions);
  return (
    <header>
      <StyledDate>{d}</StyledDate>
    </header>
  );
};

export default DateHeading;
