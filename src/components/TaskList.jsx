import React from 'react';
import Task from './Task';  // Importa el componente Task para renderizar cada tarea

function TaskList({ tasks, deleteTask, toggleCompleteTask, updateTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          key={index}  // Cada tarea debe tener una clave única
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleCompleteTask={toggleCompleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;