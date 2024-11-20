import React from "react";

function Campaign() {
  const levels = [
    { id: 1, title: "Level 1: Basics of Java" },
    { id: 2, title: "Level 2: Basics of Python" },
  ];

  return (
    <div>
      <h1>Campaigns</h1>
      <ul>
        {levels.map((level) => (
          <li key={level.id}>
            <a href={`/challenge/${level.id}`}>{level.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Campaign;