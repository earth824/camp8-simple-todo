import React from 'react';
import List from '../components/List';

function Content({ list, deleteList, updateList }) {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 mx-2 my-4">
      <List title="TO DO" list={list.filter(item => item.status === 'TO_DO')} deleteList={deleteList} updateList={updateList} />
      <List title="DOING" list={list.filter(item => item.status === 'DOING')} deleteList={deleteList} updateList={updateList} />
      <List title="DONE" list={list.filter(item => item.status === 'DONE')} deleteList={deleteList} updateList={updateList} />
    </div>
  );
}

export default Content;