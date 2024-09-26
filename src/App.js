import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText, deadline) => {
    const newTask = { text: taskText, deadline: deadline, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const toggleCompleteTask = (taskIndex) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const updateTask = (taskIndex, newText, newDeadline) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, text: newText, deadline: newDeadline } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 mb-4">Lista de Tareas</h1>
          <TaskForm addTask={addTask} />
          <TaskList 
            tasks={tasks} 
            deleteTask={deleteTask} 
            toggleCompleteTask={toggleCompleteTask} 
            updateTask={updateTask} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;