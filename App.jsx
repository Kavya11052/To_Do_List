import React, { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskBoard from './components/TaskBoard';

function Dashboard() {
  const [page, setPage] = useState('create');
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (heading, info) => {
    const newEntry = { id: Date.now(), heading, info };
    setTaskList([...taskList, newEntry]);
  };

  const modifyTask = (id, changes) => {
    setTaskList(taskList.map(task => task.id === id ? { ...task, ...changes } : task));
  };

  const removeTask = id => {
    setTaskList(taskList.filter(task => task.id !== id));
  };

  return (
    <div className="wrapper">
      <header>
        <button onClick={() => setPage('create')}>Create</button>
        <button onClick={() => setPage('tasks')}>Tasks</button>
      </header>

      {page === 'create' && <NewTaskForm onSubmit={addNewTask} />}
      {page === 'tasks' && (
        <TaskBoard 
          items={taskList} 
          onDelete={removeTask} 
          onEdit={modifyTask} 
        />
      )}
    </div>
  );
}

export default Dashboard;
