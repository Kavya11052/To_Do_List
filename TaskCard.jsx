import React, { useState } from 'react';

export default function TaskCard({ data, onDelete, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [titleEdit, setTitleEdit] = useState(data.heading);
  const [descEdit, setDescEdit] = useState(data.info);

  const handleSave = () => {
    onEdit(data.id, { heading: titleEdit, info: descEdit });
    setEditMode(false);
  };

  return (
    <div className="card">
      {editMode ? (
        <div className="editSection">
          <input value={titleEdit} onChange={e => setTitleEdit(e.target.value)} />
          <input value={descEdit} onChange={e => setDescEdit(e.target.value)} />
          <div className="actions">
            <button onClick={handleSave}>Save</button>
            <button className="cancelBtn" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h3>{data.heading}</h3>
          <p>{data.info}</p>
          <div className="actions">
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={() => onDelete(data.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
