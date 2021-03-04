import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function Form({ targetList, setTargetList, addList, updateList }) {
  const [task, setTask] = useState(targetList.id ? targetList.task : '');
  const [dueDate, setDueDate] = useState(targetList.id ? new Date(targetList.dueDate) : '');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDueDateChange = (date) => {
    setDueDate(date);
  };

  const handleCancel = () => {
    setTargetList(null);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!targetList.id) addList({ task, dueDate: new Date(dueDate) });
    else updateList({ ...targetList, task, dueDate: new Date(dueDate) });
  };

  return (
    <div className="row mx-2 my-4 justify-content-center">
      <div className="col-sm-4">
        <div className="card border-secondary">
          <form onSubmit={handleSubmitForm}>
            <div className="card-header border-secondary font-weight-bold">{targetList.id ? 'Edit' : 'Add'} List</div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="task">Task</label>
                <input
                  type="text"
                  className="form-control"
                  id="task"
                  placeholder="Enter Task"
                  onChange={handleTaskChange}
                  value={task}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="dueDate"
                  placeholder="Enter Due Date"
                  onChange={handleDueDateChange}
                  value={dueDate}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="dueDate">Due Date</label>
                <DatePicker
                  className="form-control"
                  placeholderText="Select Due Date"
                  dateFormat="dd-MM-yyyy"
                  onChange={handleDueDateChange}
                  selected={dueDate}
                />
              </div>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
              <button type="submit" className="btn btn-outline-success">
                {targetList.id ? 'Update' : 'Add'}
              </button>
              <button type="button" className="btn btn-outline-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
