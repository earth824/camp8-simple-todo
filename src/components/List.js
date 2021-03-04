import React, { useMemo } from 'react';
import ListItem from './ListItem';

function List({ title, list, setTargetList, deleteList, updateList }) {
  const mode = useMemo(() => {
    switch (title) {
      case 'TO DO':
        return 'TO_DO';
      case 'DOING':
        return 'DOING';
      case 'DONE':
        return 'DONE';
      default:
        return 'TO_DO';
    }
  }, [title]);

  return (
    <div className="col mb-4">
      <div className="card border-secondary">
        <div className="card-header border-secondary font-weight-bold" style={{ backgroundColor: '#ededed' }}>
          {title}
        </div>
        <ul className="list-group list-group-flush">
          {list.map((item) => (
            <ListItem
              key={item.id}
              mode={mode}
              item={item}
              setTargetList={setTargetList}
              deleteList={deleteList}
              updateList={updateList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
