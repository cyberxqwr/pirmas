import React, { useState } from 'react';

import './App.css';

import TaskList from './components/TaskList/TaskList';
import ShoppingApp from './components/ShoppingCart/ShoppingApp';
import GuessGame from './components/GuessingGame/GuessGame';

function App() {
  const [activeApp, setActiveApp] = useState(null);

  const renderActiveApp = () => {
    switch (activeApp) {
      case 'tasks':
        return <TaskList />;
      case 'shop':
        return <ShoppingApp />;
      case 'guess':
        return <GuessGame />;
      default:

        return <p>Pasirinkti užduotį</p>;
    }
  };

  return (
    <div className="App">
      <h1>Uzduotys</h1>
      <nav>
        {}
        <button onClick={() => setActiveApp('tasks')}>
          Užduočių sąrašas (Todo List)
        </button>
        <button onClick={() => setActiveApp('shop')}>
          Pirkinių krepšelis (Shopping Cart)
        </button>
        <button onClick={() => setActiveApp('guess')}>
          Skaičių spėjimas (Guessing Game)
        </button>
        {}
        {activeApp && (
            <button onClick={() => setActiveApp(null)}>
                Išeiti
            </button>
        )}
      </nav>

      <hr /> {}

      {}
      <div className="app-content">
        {renderActiveApp()}
      </div>
    </div>
  );
}

export default App;