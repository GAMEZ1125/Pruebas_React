import React, { useState } from 'react';
import { Button, Input } from 'reactstrap';

function Task({ task, index, deleteTask, toggleCompleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newDeadline, setNewDeadline] = useState(task.deadline);

  const handleUpdate = () => {
    updateTask(index, newText, newDeadline);
    setIsEditing(false);
  };

  return (
    <tr style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <td>
        {isEditing ? (
          <Input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
        ) : (
          task.text
        )}
      </td>
      <td>
        {isEditing ? (
          <Input 
            type="date" 
            value={newDeadline} 
            onChange={(e) => setNewDeadline(e.target.value)} 
          />
        ) : (
          task.deadline
        )}
      </td>
      <td>
        {isEditing ? (
          <Button onClick={handleUpdate} color="primary">Guardar</Button>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)} color="warning" className="mr-2">Editar</Button>
            <Button onClick={() => toggleCompleteTask(index)} color="success" className="mr-2">
              {task.completed ? 'Desmarcar' : 'Completar'}
            </Button>
            <Button onClick={() => deleteTask(index)} color="danger">Eliminar</Button>
          </>
        )}
      </td>
    </tr>
  );
}

export default Task;