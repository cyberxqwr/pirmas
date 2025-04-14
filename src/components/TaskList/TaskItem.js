function TaskItem({ task, index, deleteTask, toggleTaskDone }) {
    return (
      <li style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.text}
        <button onClick={() => toggleTaskDone(index)}>
          {task.isDone ? 'Atšaukti' : 'Pažymėti kaip atliktą'}
        </button>
        <button onClick={() => deleteTask(index)}>Ištrinti</button>
      </li>
    );
  }
  
  export default TaskItem;