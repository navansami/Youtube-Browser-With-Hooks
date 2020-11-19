import React, { useState } from 'react';

const SearchBar = ({ onTermSubmitted }) => {
  const[ term, setTerm ] = useState('');

  const onFormSubmitted = (e) => {
    e.preventDefault();
    onTermSubmitted( term );
  }

  return(
    <div className="ui segment">
      <form onSubmit={onFormSubmitted} className="ui form" >
        <div className="field" >
          <label> Search Videos </label>
          <input 
            type="text"
            value= { term }
            onChange= { e => setTerm(e.target.value) }
          />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;