function GuessForm({ handleGuess, guess, setGuess }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      handleGuess();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Įveskite skaičių (1-100)"
          min="1"
          max="100"
          required
        />
        <button type="submit">Spėti</button>
      </form>
    );
  }
  
  export default GuessForm;