// CHONY Experiment 13 - TodoItem Component
// Author: Haswinchony Saladi (23AG1A0555)

import React from 'react';

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return '#ff4757';
      case 'medium':
        return '#ffa502';
      case 'low':
        return '#2ed573';
      default:
        return '#3742fa';
    }
  };

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-header">
        <div className="todo-text">
          <h3 style={{ 
            marginBottom: '8px',
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'rgba(255, 255, 255, 0.6)' : 'var(--chony-white)'
          }}>
            {todo.text}
          </h3>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', fontSize: '0.9rem' }}>
            <span style={{ 
              color: getPriorityColor(todo.priority),
              fontWeight: '600'
            }}>
              {getPriorityLabel(todo.priority)} Priority
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {formatDate(todo.createdAt)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="todo-actions">
        <button
          className={`btn ${todo.completed ? 'btn-secondary' : 'btn-success'}`}
          onClick={() => onToggleComplete(todo.id)}
        >
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem; 