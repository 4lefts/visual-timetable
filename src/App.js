import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import DateHeading from "./DateHeading";
import Timetable from "./Timetable";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  margin: 0;
`;

const testCards = [
  {
    id: 0,
    subject: "art",
    status: null,
  },
  {
    id: 1,
    subject: "assembly",
    status: null,
  },
  {
    id: 2,
    subject: "DT",
    status: null,
  },
  {
    id: 3,
    subject: "geography",
    status: null,
  },
  {
    id: 4,
    subject: "history",
    status: null,
  },
  {
    id: 5,
    subject: "art",
    status: null,
  },
  {
    id: 6,
    subject: "assembly",
    status: null,
  },
  {
    id: 7,
    subject: "DT",
    status: null,
  },
  {
    id: 8,
    subject: "geography",
    status: null,
  },
  {
    id: 9,
    subject: "history",
    status: null,
  },
  {
    id: 10,
    subject: "art",
    status: null,
  },
];

const App = () => {
  const [cards, setCards] = useState(testCards);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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

  const removeNowAndNext = () => {
    setCards(
      cards.map((card) => {
        return {
          ...card,
          status: null,
        };
      })
    );
  };

  const setNowAndNext = (i) => {
    // make a copy of cards
    let oldCards = [...cards];
    // is the clicked card set as now?
    // if so, set everything to null
    if (oldCards[i].status === "now") {
      oldCards.forEach((card) => (card.status = null));
    } else {
      // current card is not set as now
      // so set everything to null
      oldCards.forEach((card) => (card.status = null));
      // then set now and next
      oldCards[i].status = "now";
      // if "now" is not the last card
      if (i < oldCards.length - 1) oldCards[i + 1].status = "next";
    }
    setCards([...oldCards]);
  };

  const toggleMenuState = () => {
    if (!menuIsOpen) removeNowAndNext();
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Menu
        addCard={addCard}
        clearAll={clearAll}
        menuIsOpen={menuIsOpen}
        toggleMenuState={toggleMenuState}
      ></Menu>
      <StyledMain>
        <DateHeading></DateHeading>
        {cards.length && (
          <Timetable
            cards={cards}
            menuIsOpen={menuIsOpen}
            setCards={setCards}
            clickCard={setNowAndNext}
            removeCard={removeCard}
          ></Timetable>
        )}
      </StyledMain>
    </>
  );
};

export default App;
