import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import TaskList from './components/TaskList/TaskList';
import ShoppingApp from './components/ShoppingCart/ShoppingApp';
import GuessGame from './components/GuessingGame/GuessGame';

function App() {
  const [activeApp, setActiveApp] = useState(null);

  // 3. Function to render the selected component
  const renderActiveApp = () => {
    switch (activeApp) {
      case 'tasks':
        return <TaskList />;
      case 'shop':
        return <ShoppingApp />;
      case 'guess':
        return <GuessGame />;
      default:
        // Optionally, show a welcome message or instructions when no app is selected
        return <p>Please select an application above.</p>;
    }
  };

  return (
    <div className="App">
      <h1>Uzduotys</h1>
      <nav>
        {/* 4. Buttons to set the active app state */}
        <button onClick={() => setActiveApp('tasks')}>
          Užduočių sąrašas (Todo List)
        </button>
        <button onClick={() => setActiveApp('shop')}>
          Pirkinių krepšelis (Shopping Cart)
        </button>
        <button onClick={() => setActiveApp('guess')}>
          Skaičių spėjimas (Guessing Game)
        </button>
        {/* Optional: Button to go back to the selection screen */}
        {activeApp && ( // Show 'Clear' button only if an app is active
            <button onClick={() => setActiveApp(null)}>
                Show Selection
            </button>
        )}
      </nav>

      <hr /> {/* Separator */}

      {/* 5. Render the component chosen via the state */}
      <div className="app-content">
        {renderActiveApp()}
      </div>
    </div>
  );
}

export default App;