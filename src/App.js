import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      task: 'Requirement',
      status: 'DONE',
      dueDate: new Date('10-13-2020')
    },
    {
      id: 2,
      task: 'Wireframe',
      status: 'DOING',
      dueDate: new Date('10-16-2020')
    },
    {
      id: 3,
      task: 'Prototype',
      status: 'DOING',
      dueDate: new Date('10-18-2020')
    }
  ]);
  const [nextId, setNextId] = useState(4);
  const [listForm, setListForm] = useState({ isEdit: false, list: null });

  const addList = (list) => {
    setList(value => [...value, { ...list, id: nextId, status: 'TO_DO' }]);
    setNextId(value => value + 1);
  };

  const deleteList = (id) => {
    setList(value => value.filter(item => item.id !== id));
  };

  const updateList = (list) => {
    setList(value => value.map(item => item.id === list.id ? list : item));
  };

  return (
    <div className="container-fluid px-0">
      <Navbar addList={addList} listForm={listForm} />
      <Content list={list} deleteList={deleteList} updateList={updateList} />
    </div>
  );
}

export default App;
