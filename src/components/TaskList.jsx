import React from 'react';
import Task from './Task';
import { Table } from 'reactstrap';

function TaskList({ tasks, deleteTask, toggleCompleteTask, updateTask }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Fecha límite</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleCompleteTask={toggleCompleteTask}
            updateTask={updateTask}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default TaskList;