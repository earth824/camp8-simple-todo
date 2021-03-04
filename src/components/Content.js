import React from 'react';
import List from '../components/List';

function Content({
  list,
  setTargetList,
  deleteList,
  updateList,
  searchTerm
}) {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 mx-2 my-4">
      <List
        title="TO DO"
        list={list.filter(
          item =>
            item.status === 'TO_DO' &&
            item.task
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )}
        setTargetList={setTargetList}
        deleteList={deleteList}
        updateList={updateList}
      />
      <List
        title="DOING"
        list={list.filter(
          item =>
            item.status === 'DOING' &&
            item.task
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )}
        setTargetList={setTargetList}
        deleteList={deleteList}
        updateList={updateList}
      />
      <List
        title="DONE"
        list={list.filter(
          item =>
            item.status === 'DONE' &&
            item.task
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        )}
        setTargetList={setTargetList}
        deleteList={deleteList}
        updateList={updateList}
      />
    </div>
  );
}

export default Content;
