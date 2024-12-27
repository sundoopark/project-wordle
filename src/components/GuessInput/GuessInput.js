import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ tentativeGuess });
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Guess the word:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
