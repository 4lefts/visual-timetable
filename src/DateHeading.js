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

const DateHeading = () => {
  const d = new Date();
  const date = d.getDate();
  const dateString = d.toLocaleDateString("en-GB", dateOptions);
  const parsedDate = dateString.replace(date, ordinal(date)).replace(",", "");

  return (
    <header>
      <StyledDate>{parsedDate}</StyledDate>
    </header>
  );
};

export default DateHeading;
