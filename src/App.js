import React, { useState } from "react";
// import styled from "styled-components";
import Menu from "./Menu";
import Timetable from "./Timetable";

const testCards = [
  {
    id: 0,
    subject: "art",
  },
  {
    id: 1,
    subject: "assembly",
  },
  {
    id: 2,
    subject: "DT",
  },
  {
    id: 3,
    subject: "geography",
  },
  {
    id: 4,
    subject: "history",
  },
  {
    id: 5,
    subject: "art",
  },
  {
    id: 6,
    subject: "assembly",
  },
  {
    id: 7,
    subject: "DT",
  },
  {
    id: 8,
    subject: "geography",
  },
  {
    id: 9,
    subject: "history",
  },
  {
    id: 10,
    subject: "art",
  },
];

const App = () => {
  const [cards, setCards] = useState(testCards);

  const addCard = (newCard) => {
    // use the date in ms for card ids
    // we don't care about randomness, etc
    // only that the id increments
    // data is only on the client side - there is no db
    const newId = new Date().getTime();
    setCards([
      ...cards,
      {
        id: newId,
        subject: newCard,
      },
    ]);
  };

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const clearAll = () => {
    setCards([]);
  };

  return (
    <>
      <Menu addCard={addCard} clearAll={clearAll}></Menu>
      {cards.length && (
        <Timetable
          cards={cards}
          setCards={setCards}
          removeCard={removeCard}
        ></Timetable>
      )}
    </>
  );
};

export default App;
