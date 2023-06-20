import React from "react";

function Search({ searchData, onSetSearchData }) {
  function handleSearch(e) {
    onSetSearchData(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchData} onChange={handleSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
