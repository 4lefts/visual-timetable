import React from "react";
import { ReactSortable } from "react-sortablejs";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import DateHeading from "./DateHeading";
import Card from "./Card";

const StyledTimetable = styled.ol`
  list-style: none;
  margin: 20px;
  padding: 0;
  display: grid;
  align-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, 175px);
`;

const Timetable = ({ cards, setCards, removeCard }) => {
  return (
    <ReactSortable
      tag={StyledTimetable}
      list={cards}
      setList={setCards}
      animation={200}
    >
      <TransitionGroup component={null}>
        {cards.map((card) => (
          <CSSTransition key={card.id} timeout={500} classNames="card">
            <Card
              id={card.id}
              subject={card.subject}
              removeCard={removeCard}
            ></Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ReactSortable>
  );
};

export default Timetable;
