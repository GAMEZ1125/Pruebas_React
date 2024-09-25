import React, { useState } from 'react';
import TaskList from './components/TaskList';  // Importa la lista de tareas
import TaskForm from './components/TaskForm';  // Importa el formulario para agregar tareas
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function App() {
  // Estado para gestionar las tareas. Comienza con un array vacío.
  const [tasks, setTasks] = useState([]);

  // Función para agregar nuevas tareas
  const addTask = (taskText) => {
    const newTask = { text: taskText, completed: false };  // Cada tarea tiene un texto y un estado de completada
    setTasks([...tasks, newTask]);  // Agrega la nueva tarea al estado
  };

  // Función para eliminar una tarea
  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);  // Filtra las tareas eliminando la seleccionada
    setTasks(newTasks);  // Actualiza el estado con las tareas restantes
  };
  // Función para marcar una tarea como completada
  const toggleCompleteTask = (taskIndex) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const updateTask = (taskIndex, newText) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, text: newText } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      {/* Renderiza el formulario para agregar tareas */}
      <TaskForm addTask={addTask} />
      
      {/* Renderiza la lista de tareas, pasándole las tareas y la función para eliminarlas */}
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;