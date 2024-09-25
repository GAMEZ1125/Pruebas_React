import React, { useState } from 'react';
import { Button } from 'reactstrap';
function Task({ task, index, deleteTask, toggleCompleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);  // Para controlar el modo de edición
  const [newText, setNewText] = useState(task.text);  // Estado para almacenar el nuevo texto de la tarea

  const handleUpdate = () => {
    updateTask(index, newText);
    setIsEditing(false);  // Cierra el modo de edición después de actualizar
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <Button onClick={handleUpdate}>Guardar</Button>
        </>
      ) : (
        <>
          {task.text}
          <Button onClick={() => setIsEditing(true)} color="warning" >Editar</Button>
          <Button onClick={() => toggleCompleteTask(index)} color="success" >
            {task.completed ? 'Desmarcar' : 'Completar'}
          </Button>
          <Button onClick={() => deleteTask(index)}color="danger" >Eliminar</Button>
        </>
      )}
    </li>
  );
}

export default Task;
