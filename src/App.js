import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Form from './components/Form';
import data from './mock/data';

function App() {
  const [list, setList] = useState(data);
  const [nextId, setNextId] = useState(data.length + 1);
  const [targetList, setTargetList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  const addList = newList => {
    setList(value => [
      ...value,
      { ...newList, id: nextId, status: 'TO_DO' }
    ]);
    setNextId(value => value + 1);
    setTargetList(null);
  };

  const deleteList = id => {
    setList(value => value.filter(item => item.id !== id));
  };

  const updateList = updatedList => {
    setList(value =>
      value.map(item =>
        item.id === updatedList.id
          ? { ...item, ...updatedList }
          : item
      )
    );
    setTargetList(null);
  };

  return (
    <div className="container-fluid px-0">
      <Navbar
        setTargetList={setTargetList}
        setSearchTerm={setSearchTerm}
      />
      {!targetList && (
        <Content
          list={list}
          setTargetList={setTargetList}
          updateList={updateList}
          deleteList={deleteList}
          searchTerm={searchTerm}
        />
      )}
      {targetList && (
        <Form
          targetList={targetList}
          setTargetList={setTargetList}
          addList={addList}
          updateList={updateList}
        />
      )}
    </div>
  );
}

export default App;
