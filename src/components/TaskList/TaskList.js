import React, { useState } from 'react';

import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList() {
    const [tasks, setTasks] = useState([
      { text: 'Išmokti React', isDone: false },
      { text: 'Sukurti užduočių sąrašą', isDone: true },
    ]);
  
    const addTask = (text) => {
      const newTask = { text, isDone: false };
      setTasks([...tasks, newTask]);
    };
  
    const deleteTask = (indexToDelete) => {
      setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };
  
    const toggleTaskDone = (indexToToggle) => {
      setTasks(
        tasks.map((task, index) =>
          index === indexToToggle ? { ...task, isDone: !task.isDone } : task
        )
      );
    };
  
    return (
      <div>
        <h1>Užduočių sąrašas</h1>
        <TaskForm addTask={addTask} />
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              toggleTaskDone={toggleTaskDone}
            />
          ))}
        </ul>
      </div>
    );
  }

  export default TaskList;