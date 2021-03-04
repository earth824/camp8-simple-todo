import React from 'react';

function Navbar({ setTargetList, setSearchTerm }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="text-info">To Do List App</span>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-outline-info mr-2"
        >
          Search
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => setTargetList({})}
        >
          Add
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
