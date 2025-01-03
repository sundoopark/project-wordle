import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const lastGuess = guesses.at(-1);
  const numOfGuesses = guesses.length;
  const gameOver = answer === lastGuess || numOfGuesses >= 6;

  function handleSubmitGuess(nextGuess) {
    setGuesses([...guesses, nextGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameOver={gameOver}
      ></GuessInput>
      {answer === lastGuess && (
        <Banner
          bannerType={"happy"}
          children={
            <p>
              <strong>Congratulations!</strong> Got it in{" "}
              <strong>{numOfGuesses} guess(es)</strong>.
            </p>
          }
        />
      )}
      {numOfGuesses >= 6 && (
        <Banner
          bannerType={"sad"}
          children={
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          }
        />
      )}
    </>
  );
}

export default Game;
