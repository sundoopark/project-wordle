import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const letterChecks = value ? checkGuess(value, answer) : undefined;

  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <Cell
            key={num}
            letter={letterChecks ? letterChecks[num].letter : undefined}
            status={letterChecks ? letterChecks[num].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
