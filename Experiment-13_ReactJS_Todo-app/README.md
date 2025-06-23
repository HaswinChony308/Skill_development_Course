# Experiment 13: React TODO App

## Student Information
- **Name:** Haswinchony Saladi
- **Roll No:** 23AG1A0555
- **Email:** 23ag1a0555@gmail.com
- **Phone:** 7995921729

## Aim
To develop a TODO list application frontend using React, allowing users to add, complete, and delete tasks with a clean Canva-style UI.

## Description
This experiment demonstrates how to build a single-page TODO application using React.js. The app allows users to manage their daily tasks in a dynamic and interactive way. It showcases React concepts like state management using useState, component-based architecture, and basic form handling. The project includes modern UI design with CHONY branding.

## Project Structure
```
Experiment13/
├── public/
│   └── index.html           # HTML template
├── src/
│   ├── components/
│   │   ├── TodoForm.js      # Component to add new tasks
│   │   ├── TodoItem.js      # Component to render a single task
│   │   └── TodoList.js      # Component to list all tasks
│   ├── App.js               # Main application component
│   ├── App.css              # Styling for the app (Canva style)
│   └── index.js             # Entry point of the React app
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
└── Screenshots/             # Output screenshots
```

## Installation & Setup

### Prerequisites
- Node.js & npm
- VS Code or any code editor
- Basic knowledge of React

### Steps to Run
1. **Navigate to the project directory:**
   ```bash
   cd Experiment13
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Visit in Browser:**
   - http://localhost:3000

## Features
- **Add Tasks:** Create new tasks with priority levels
- **Complete Tasks:** Mark tasks as complete/incomplete
- **Delete Tasks:** Remove individual tasks
- **Filter Tasks:** Filter by status (all, pending, completed) and priority
- **Task Statistics:** View total, completed, and pending task counts
- **Local Storage:** Tasks persist between browser sessions
- **Responsive Design:** Mobile-friendly interface
- **CHONY Branding:** Consistent branding throughout

## Components

### TodoForm
- Input field for task description
- Priority selection (Low, Medium, High)
- Form validation
- Modern styling with glassmorphism effects

### TodoItem
- Display task text and priority
- Complete/incomplete toggle
- Delete functionality
- Creation timestamp
- Visual indicators for completed tasks

### TodoList
- Display all tasks with filtering
- Task statistics
- Clear completed/all tasks options
- Responsive grid layout

## Screenshots

Please add the following screenshots to the `Screenshots/` directory:

1. **home.png** - Main TODO app interface
2. **add-task.png** - Adding a new task
3. **task-list.png** - List of tasks with different priorities
4. **completed-tasks.png** - Completed tasks view
5. **filter-tasks.png** - Filtering tasks by status/priority
6. **mobile-view.png** - Responsive mobile design
7. **task-actions.png** - Task completion and deletion actions

### Screenshot Guidelines
- Use high-resolution screenshots
- Show different task states (pending, completed)
- Demonstrate filtering functionality
- Include CHONY branding in all screenshots
- Show responsive/mobile view
- Capture task statistics

## Sample Data
The app comes with sample tasks:
- Complete SDC Lab Experiments (High Priority)
- Study React Components (Completed, Medium Priority)
- Build CHONY Portfolio (High Priority)

## Local Storage
Tasks are automatically saved to browser localStorage and persist between sessions.

## Dependencies
- **React:** Frontend framework
- **React Scripts:** Development tools
- **CSS:** Custom styling with modern design

## License
This project is licensed under the MIT License.

---

**CHONY | Experiment 13 | React TODO App** 