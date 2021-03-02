import React, { useState } from 'react';

function Navbar({ addList, listForm: { isEdit, list } }) {
  const [task, setTask] = useState(isEdit ? list.task : '');
  const [dueDate, setDueDate] = useState(isEdit ? list.date.toLocaleDateString() : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    addList({ task, dueDate: new Date(dueDate) });
    setTask('');
    setDueDate('');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="text" placeholder="To Do List" value={task} onChange={(e) => setTask(e.target.value)} />
        <input className="form-control mr-sm-2" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <button type="submit" className="btn btn-outline-info">{isEdit ? 'Edit' : 'Add'}</button>
      </form>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      </form>
      {/* </div> */}
    </nav >
  );
}

export default Navbar;