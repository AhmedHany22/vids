import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  render() {
    return (
      <div className="ui segment">
        <form className="ui search" onSubmit={this.onSearch}>
          <div className="ui icon input">
            <input
              type="text"
              className="prompt"
              value={this.state.term}
              onChange={this.setTerm}
              placeholder="Search ..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
      </div>
    );
  }
  setTerm = (e) => {
    this.setState({ term: e.currentTarget.value });
  };

  onSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };
}

export default SearchBar;
