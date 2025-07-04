import React, { useState } from 'react';

export default function NewTaskForm({ onSubmit }) {
  const [heading, setHeading] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (heading && info) {
      onSubmit(heading, info);
      setHeading('');
      setInfo('');
    }
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={heading}
        onChange={e => setHeading(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Details" 
        value={info}
        onChange={e => setInfo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
