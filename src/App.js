import React, { useState } from "react";

const App = () => {
  const [cards, setCards] = useState([
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
  ]);

  const addCard = (newCard) => {
    const newId = cards.length;
    setCards([
      ...cards,
      {
        id: newId,
        subject: newCard,
      },
    ]);
  };

  const removeCard = (id) => {
    console.log(id);
    // remove the card with this id from the cards array

    // reset all ids? is this necessary?
    // should we actually use something better to set a unique id?
  };

  return (
    <>
      <Menu addCard={addCard}></Menu>
      <Timetable cards={cards} removeCard={removeCard}></Timetable>;
    </>
  );
};

const Timetable = ({ cards, removeCard }) => (
  <ol>
    {cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        subject={card.subject}
        removeCard={removeCard}
      ></Card>
    ))}
  </ol>
);

const Card = ({ id, subject, removeCard }) => {
  const handleClick = () => {
    removeCard(id);
  };
  return (
    <li>
      <div>{subject}</div>
      <button onClick={handleClick}>&times;</button>
    </li>
  );
};

const Menu = ({ addCard }) => {
  const subjects = [
    "art",
    "assembly",
    "DT",
    "English",
    "geography",
    "history",
    "home time",
    "languages",
    "lunch",
    "maths",
    "music",
    "PE",
    "play time",
    "PSHE",
    "RE",
    "register",
    "reading",
    "science",
    "story time",
    "test",
  ];

  const handleClick = (subject) => addCard(subject);

  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject}>
          <button onClick={() => handleClick(subject)}>{subject}</button>
        </li>
      ))}
    </ul>
  );
};

export default App;
