import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent page reload
      if (!inputValue.trim()) return; // Ignore empty input
      addTask(inputValue);
      setInputValue(''); // Clear input field
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nauja užduotis"
        />
        <button type="submit">Pridėti užduotį</button>
      </form>
    );
  }

  export default TaskForm;