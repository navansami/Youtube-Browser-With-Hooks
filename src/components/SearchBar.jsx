import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmitted = (e) => {
    e.preventDefault();

    this.props.onTermSubmitted(this.state.term );
  }

  render() {
    return(
      <div 
        style={{ backgroundColor:'black' }}
        className="ui segment" 
      >
        <form onSubmit={this.onFormSubmitted} className="ui form" >
          <div className="field" >
            <label> Search Videos </label>
            <input 
              type="text"
              value= { this.state.term }
              onChange= { e => this.setState({ term: e.target.value }) }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;