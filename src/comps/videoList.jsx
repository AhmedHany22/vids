import React, { Component } from "react";

class VideoList extends Component {
  title = (item) => {
    return item.snippet.title.length > 28
      ? `${item.snippet.title.substring(0, 28)} ...`
      : item.snippet.title;
  };
  render() {
    const { list, selectedItem } = this.props;
    const gr = !selectedItem ? "eight wide column" : "";
    const con = !selectedItem ? "grid" : "celled list";
    return (
      <div
        className={`ui + ${con}`}
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        {list.map((item) => (
          <div
            key={item.id.videoId}
            className={`item video-item ${gr}`}
            onClick={() => this.props.onSelectVideo(item)}
          >
            <img
              alt={item.snippet.title}
              className="ui image"
              src={item.snippet.thumbnails.default.url}
            />
            <div className="content">
              <div className="header">{this.title(item)}</div>
              {item.snippet.channelTitle}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default VideoList;
