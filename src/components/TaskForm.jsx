import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText, deadline);
      setTaskText('');
      setDeadline('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="taskText" className="mr-sm-2">Tarea</Label>
        <Input
          type="text"
          name="taskText"
          id="taskText"
          placeholder="Nueva tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="deadline" className="mr-sm-2">Fecha límite</Label>
        <Input
          type="date"
          name="deadline"
          id="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
}

export default TaskForm;