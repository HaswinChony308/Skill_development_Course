// CHONY Experiment 13 - Main App Component
// Author: Haswinchony Saladi (23AG1A0555)

import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('chony-todos');
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: 1,
        text: 'Complete SDC Lab Experiments',
        completed: false,
        priority: 'high',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        text: 'Study React Components',
        completed: true,
        priority: 'medium',
        createdAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: 3,
        text: 'Build CHONY Portfolio',
        completed: false,
        priority: 'high',
        createdAt: new Date().toISOString()
      }
    ];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chony-todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTodos([]);
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="app-root">
      <header className="chony-header">
        <div className="container header-flex">
          <div className="logo">
            <span className="chony-logo">CHONY</span>
            <span className="chony-sub">Task Manager</span>
          </div>
          <div className="header-info">
            <span>{pendingCount} tasks pending</span>
          </div>
        </div>
      </header>

      <main className="container main-content fade-in">
        <TodoForm onAddTodo={addTodo} />
        
        {todos.length > 0 && (
          <div className="card" style={{ marginTop: '30px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <h2 style={{ color: 'var(--chony-red)' }}>Task Summary</h2>
              <div style={{ display: 'flex', gap: '10px' }}>
                {completedCount > 0 && (
                  <button className="btn btn-secondary" onClick={clearCompleted}>
                    Clear Completed
                  </button>
                )}
                <button className="btn btn-danger" onClick={clearAll}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        )}
        
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
        />
      </main>

      <footer className="chony-footer text-center">
        <div className="container">
          <span>© 2024 CHONY | Task Manager | Haswinchony Saladi (23AG1A0555)</span>
        </div>
      </footer>
    </div>
  );
}

export default App; 