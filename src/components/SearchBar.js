import React, {useState} from 'react';

const SearchBar = ({onSearchTermSubmit}) => {
  const [term, setTerm] = useState('');

  const onChange = e => {
    setTerm(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onSearchTermSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={e => onSubmit(e)}>
        <div className="field">
          <label>Search Videos</label>
          <input
            type="text"
            value={term}
            onChange={e => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
