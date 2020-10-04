import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import DateHeading from "./DateHeading";
import Timetable from "./Timetable";

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  min-height: calc(100% + ${(props) => props.menuHeight}px);
  margin-top: -${(props) => props.menuHeight}px;
  transition: margin 0.5s ease;
  &.menu-open {
    margin-top: 0;
  }
`;

// testCards, used for testing...
// const testCards = [
//   { id: 0, subject: "art", status: null },
//   { id: 1, subject: "assembly", status: null },
//   { id: 2, subject: "computing", status: null },
//   { id: 3, subject: "DT", status: null },
//   { id: 4, subject: "English", status: null },
//   { id: 5, subject: "geography", status: null },
//   { id: 22, subject: "handwriting", status: null },
//   { id: 6, subject: "history", status: null },
//   { id: 7, subject: "home time", status: null },
//   { id: 8, subject: "languages", status: null },
//   { id: 9, subject: "lunch time", status: null },
//   { id: 10, subject: "maths", status: null },
//   { id: 11, subject: "music", status: null },
//   { id: 12, subject: "phonics", status: null },
//   { id: 13, subject: "PE", status: null },
//   { id: 14, subject: "play time", status: null },
//   { id: 15, subject: "PSHE", status: null },
//   { id: 16, subject: "RE", status: null },
//   { id: 17, subject: "reading", status: null },
//   { id: 18, subject: "register", status: null },
//   { id: 19, subject: "science", status: null },
//   { id: 20, subject: "story time", status: null },
//   { id: 21, subject: "test", status: null },
// ];

const App = () => {
  const getInitialCards = () =>
    JSON.parse(window.localStorage.getItem("cards")) || [];
  const [cards, setCards] = useState(getInitialCards()); // passing a function here means we only read from local storage on initial render
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // set cards in localstorage...
  useEffect(() => {
    window.localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]); // ...but only when cards array changes

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

  const [menuHeight, setMenuHeight] = useState(100);
  useEffect(() => {
    // set negative margin on app container
    setMenuHeight(getMenuHeight());

    // set a listener on window resize
    // this is added to both window resize and full screen change events
    // use this setTimeout to debounce resize events
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMenuHeight(getMenuHeight());
      }, 100);
    };

    window.addEventListener("resize", resizeListener);
    window.addEventListener("onfullscreenchange", resizeListener);
    // clean up function
    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("onfullscreenchange", resizeListener);
    };
  }, []);

  const getMenuHeight = () =>
    document.querySelector("#menu-container").offsetHeight - 46; //subtract button height

  return (
    <StyledMain
      menuHeight={menuHeight}
      className={menuIsOpen ? "menu-open" : ""}
    >
      <Menu
        addCard={addCard}
        clearAll={clearAll}
        menuIsOpen={menuIsOpen}
        toggleMenuState={toggleMenuState}
      ></Menu>
      <DateHeading></DateHeading>
      {cards.length > 0 && (
        <Timetable
          cards={cards}
          menuIsOpen={menuIsOpen}
          setCards={setCards}
          clickCard={setNowAndNext}
          removeCard={removeCard}
        ></Timetable>
      )}
    </StyledMain>
  );
};

export default App;
