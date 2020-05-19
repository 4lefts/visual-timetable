import React from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import Card from "./Card";

const StyledTimetable = styled.ol`
  list-style: none;
  margin: 20px;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 175px);
`;

const Timetable = ({ cards, setCards, removeCard }) => (
  <ReactSortable tag={StyledTimetable} list={cards} setList={setCards}>
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        subject={card.subject}
        removeCard={removeCard}
      ></Card>
    ))}
  </ReactSortable>
);

export default Timetable;
