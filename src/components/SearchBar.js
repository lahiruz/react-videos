import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search Videos</label>
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
