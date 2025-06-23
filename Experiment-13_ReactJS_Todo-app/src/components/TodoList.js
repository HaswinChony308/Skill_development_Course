// CHONY Experiment 13 - TodoList Component
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'completed':
        return todo.completed;
      case 'pending':
        return !todo.completed;
      case 'high':
        return todo.priority === 'high';
      case 'medium':
        return todo.priority === 'medium';
      case 'low':
        return todo.priority === 'low';
      default:
        return true;
    }
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.filter(todo => !todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="card slide-in">
      <div className="todo-stats mb-20">
        <h2 style={{ color: 'var(--chony-red)', marginBottom: '15px' }}>Your Tasks</h2>
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          flexWrap: 'wrap',
          marginBottom: '20px'
        }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '10px 15px', 
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ color: 'var(--chony-white)', fontWeight: '600' }}>Total: {totalCount}</span>
          </div>
          <div style={{ 
            background: 'rgba(46, 213, 115, 0.2)', 
            padding: '10px 15px', 
            borderRadius: '8px',
            border: '1px solid rgba(46, 213, 115, 0.3)'
          }}>
            <span style={{ color: 'var(--todo-green)', fontWeight: '600' }}>Completed: {completedCount}</span>
          </div>
          <div style={{ 
            background: 'rgba(255, 71, 87, 0.2)', 
            padding: '10px 15px', 
            borderRadius: '8px',
            border: '1px solid rgba(255, 71, 87, 0.3)'
          }}>
            <span style={{ color: 'var(--chony-red)', fontWeight: '600' }}>Pending: {pendingCount}</span>
          </div>
        </div>
      </div>

      <div className="filter-controls mb-20">
        <label className="form-label">Filter Tasks:</label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`btn ${filter === 'high' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setFilter('high')}
          >
            High Priority
          </button>
        </div>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="text-center" style={{ padding: '40px 20px' }}>
          <h3 style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '10px' }}>
            {filter === 'all' ? 'No tasks yet!' : `No ${filter} tasks found`}
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {filter === 'all' ? 'Add your first task above to get started.' : 'Try changing the filter or add new tasks.'}
          </p>
        </div>
      ) : (
        <div className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList; 