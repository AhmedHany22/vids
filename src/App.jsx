import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import SearchBar from "./comps/searchBar";
import youtube from "./api/youtube";
import VideoList from "./comps/videoList";
import VideoDetail from "./comps/videoDetail";

class App extends Component {
  state = { term: "", list: [], selectedItem: null };
  componentDidMount = async () => {
    const { data } = await youtube.get("/search", { params: { q: "" } });
    this.setState({ list: data.items });
  };
  onDisplaying = () => {
    if (!this.state.selectedItem) {
      return (
        <React.Fragment>
          <div className="16 wide column">
            <VideoList list={this.state.list} onSelectVideo={this.onSelect} />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="ten wide column">
          <VideoDetail selectedItem={this.state.selectedItem} />
        </div>
        <div className="six wide column">
          <VideoList
            list={this.state.list}
            onSelectVideo={this.onSelect}
            selectedItem={this.state.selectedItem}
          />
        </div>
      </React.Fragment>
    );
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className="ui grid">{this.onDisplaying()}</div>
      </div>
    );
  }
  onSearch = async (term) => {
    const { data } = await youtube.get("/search", { params: { q: term } });
    this.setState({
      term: term,
      list: data.items,
      selectedItem: data.items[0],
    });
  };
  onSelect = (item) => {
    this.setState({ selectedItem: item });
  };
}

export default App;
