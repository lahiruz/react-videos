import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onChange = e => {
    this.setState({ term: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSearchTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
