// CHONY Experiment 13 - TodoForm Component
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (task.trim()) {
      const newTodo = {
        id: Date.now(),
        text: task.trim(),
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString()
      };
      
      onAddTodo(newTodo);
      setTask('');
      setPriority('medium');
    }
  };

  return (
    <div className="card slide-in">
      <h2 className="mb-20" style={{ color: 'var(--chony-red)' }}>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="task">Task Description</label>
          <input
            type="text"
            id="task"
            className="form-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task here..."
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label" htmlFor="priority">Priority</label>
          <select
            id="priority"
            className="form-input"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm; 