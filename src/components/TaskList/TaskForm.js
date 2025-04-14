import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;
      addTask(inputValue);
      setInputValue('');
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