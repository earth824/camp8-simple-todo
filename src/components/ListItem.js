import React, { useMemo } from 'react';

function ListItem({ mode, item: { id, task, dueDate }, setTargetList, deleteList, updateList }) {
  const status = useMemo(() => {
    switch (mode) {
      case 'TO_DO':
        return {
          text: ['Doing', 'Done'],
          value: ['DOING', 'DONE'],
        };
      case 'DOING':
        return {
          text: ['To Do', 'Done'],
          value: ['TO_DO', 'DONE'],
        };
      case 'DONE':
        return {
          text: ['To Do', 'Doing'],
          value: ['TO_DO', 'DOING'],
        };
      default:
        return {
          text: ['Doing', 'Done'],
          value: ['DOING', 'DONE'],
        };
    }
  }, [mode]);

  const updateStatus = (value) => {
    updateList({ id, task, dueDate, status: value });
  };

  const editList = () => {
    setTargetList({ id, task, dueDate });
  };

  return (
    <li className="list-group-item d-flex justify-content-between flex-wrap">
      <div className="d-flex flex-column justify-content-center">
        <p className="card-title mb-1">{task}</p>
        <p className="card-text mb-2">
          <small className="text-muted">{dueDate.toLocaleDateString('en-GB')}</small>
        </p>
      </div>
      <div className="btn-group">
        <button className="btn btn-outline-primary btn-sm align-self-center" onClick={editList}>
          <i className="fa fa-edit"></i>
        </button>
        <button className="btn btn-outline-danger btn-sm align-self-center" onClick={() => deleteList(id)}>
          <i className="fa fa-trash-o"></i>
        </button>
        <button className="btn btn-outline-info btn-sm align-self-center" onClick={() => updateStatus(status.value[0])}>
          {status.text[0]}
        </button>
        <button
          className="btn btn-outline-success btn-sm align-self-center"
          onClick={() => updateStatus(status.value[1])}
        >
          {status.text[1]}
        </button>
      </div>
    </li>
  );
}

export default ListItem;
