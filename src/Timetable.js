import React from "react";
import { ReactSortable } from "react-sortablejs";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
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

const Timetable = ({ cards, setCards, clickCard, menuIsOpen, removeCard }) => {
  return (
    <ReactSortable
      tag={StyledTimetable}
      list={cards}
      setList={setCards}
      animation={200}
      handle={".handle"}
    >
      <TransitionGroup component={null}>
        {cards.map((card, index) => (
          <CSSTransition key={card.id} timeout={500} classNames="card">
            <Card
              id={card.id}
              index={index}
              subject={card.subject}
              status={card.status}
              menuIsOpen={menuIsOpen}
              clickCard={clickCard}
              removeCard={removeCard}
            ></Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ReactSortable>
  );
};

export default Timetable;
