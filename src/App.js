import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";

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
    // use the date in ms for card ids
    // we don't care about randomness
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

  return (
    <>
      <Menu addCard={addCard}></Menu>
      <ReactSortable tag="ol" list={cards} setList={setCards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            subject={card.subject}
            removeCard={removeCard}
          ></Card>
        ))}
      </ReactSortable>
    </>
  );
};

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
