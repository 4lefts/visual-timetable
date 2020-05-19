import React from "react";

const Menu = ({ addCard, clearAll }) => {
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
    <div>
      <ul>
        {subjects.map((subject) => (
          <li key={subject}>
            <button onClick={() => handleClick(subject)}>{subject}</button>
          </li>
        ))}
      </ul>
      <button onClick={clearAll}>Clear all</button>
    </div>
  );
};

export default Menu;
