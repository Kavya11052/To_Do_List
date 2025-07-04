import React from 'react';
import TaskCard from './TaskCard';

export default function TaskBoard({ items, onDelete, onEdit }) {
  return (
    <>
      {items.map(task => (
        <TaskCard 
          key={task.id}
          data={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
}
