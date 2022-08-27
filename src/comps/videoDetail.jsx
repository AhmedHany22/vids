import React, { Component } from "react";

class VideoDetail extends Component {
  render() {
    const { selectedItem } = this.props;
    if (!selectedItem) return <h1 className="ui segment">Loading...</h1>;

    return (
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="ui segment">
          <div className="ui embed">
            <iframe
              src={`https://www.youtube.com/embed/${selectedItem.id.videoId}`}
              title="YouTube"
            ></iframe>
          </div>
        </div>
        <div className="ui segment">
          <h1>{selectedItem.snippet.title}</h1>
          <p>{selectedItem.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
