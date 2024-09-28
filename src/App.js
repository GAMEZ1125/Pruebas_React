// App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login/Login';

function Home({ tasks, addTask, deleteTask, toggleCompleteTask, updateTask }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="text-center">Lista de Tareas</h1>
            <Button className="btn-logout" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </div>
          <div className="card-custom">
            <TaskForm addTask={addTask} className="form-custom" />
          </div>
          <div className="card-custom mt-4">
            <TaskList 
              tasks={tasks} 
              deleteTask={deleteTask} 
              toggleCompleteTask={toggleCompleteTask} 
              updateTask={updateTask} 
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


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
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={
          <Home 
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
            toggleCompleteTask={toggleCompleteTask}
            updateTask={updateTask}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
