import React from "react";
import videos from "./videos.json";

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      epiIndex: 0,
      isPlaying: false,
    };
    this.video = React.createRef();
  }

  // link: {}

  // displayVideo: new Video(link)

  // prevEpisode = () => {
  //   this.setState((state) => ({
  //     epiIndex: state.epiIndex - 1,
  //   }));
  // };

  prevMovie = () => {
    if (this.state.index === 0 && this.state.epiIndex === 0) {
      this.setState((state) => ({
        index: videos.shows.length - 1,
        epiIndex: videos.shows[videos.shows.length - 1].episodes.length - 1,
      }));
    }
    // if (this.state.index === 0) {
    //   this.setState((state) => ({
    //     epiIndex: state.epiIndex - 1,
    //   }));
    // }
    if (this.state.epiIndex === 0) {
      this.setState((state) => ({
        index: state.index - 1,
        epiIndex: 0,
      }));
    } else {
      this.setState((state) => ({
        epiIndex: state.epiIndex - 1,
      }));
    }
    // if (this.state.index === 0) {
    //   this.setState((state) => ({
    //     index: videos.shows.length - 1,
    //   }));
    // } else {
    //   this.setState((state) => ({
    //     index: state.index - 1,
    //   }));
    // }
  };

  // nextEpisode = () => {
  //   this.setState((state) => ({
  //     epiIndex: state.epiIndex + 1,
  //   }));
  // };

  nextMovie = () => {
    if (
      this.state.index === videos.shows[this.state.index].length - 1 &&
      this.state.epiIndex === videos.shows[this.state.index].episodes.length - 1
    ) {
      this.setState((state) => ({
        index: 0,
        epiIndex: 0,
      }));
    }
    if (this.state.index === videos.shows.length - 1) {
      this.setState((state) => ({
        index: 0,
      }));
    }
    if (
      this.state.epiIndex ===
      videos.shows[this.state.index].episodes.length - 1
    ) {
      this.setState((state) => ({
        index: state.index + 1,
        epiIndex: 0,
      }));
    } else {
      this.setState((state) => ({
        epiIndex: state.epiIndex + 1,
      }));
    }
  };

  playPause = () => {
    console.log(this.state.isPlaying);
    console.log(this.video.current);
    this.state.isPlaying === false
      ? this.video.current.play()(
          this.setState((state) => ({ isPlaying: true }))
        )
      : this.video.current.pause()(
          this.setState((state) => ({ isPlaying: false }))
        );
    //     this.setState((state) => ({
    //       this.isPlaying ?
    //
    //       :
    // this.video.current.pause();
  };
  //  !state.isPlaying,
  // if(isPlaying) {
  //   isPlaying: true;
  // } else {
  //   isPlaying: false;
  // }
  //   }));
  // };

  render() {
    return (
      <div className="video">
        <h1>Home of the top and trending videos around the world.</h1>
        <div className="video-display">
          <video
            src={
              videos.shows[this.state.index].episodes[this.state.epiIndex]
                .sources.full
            }
            ref={this.video}
          ></video>
          <div className="video-controls">
            <i onClick={this.prevMovie} className="fa-solid fa-backward"></i>
            {this.state.isPlaying ? (
              <i onClick={this.playPause} className="fa-solid fa-pause">
                {" "}
              </i>
            ) : (
              <i onClick={this.playPause} className="fa-solid fa-play"></i>
            )}
            <i onClick={this.nextMovie} className="fa-solid fa-forward"></i>
          </div>
        </div>

        {/* <br />
        <button onClick={this.prevMovie}>Prev Movie</button>
        <button onClick={this.prevEpisode}>Prev Episode</button>
        <button onClick={this.playPause}>Play/Pause</button>
        <button onClick={this.nextEpisode}>Next Episode</button>
        <button onClick={this.nextMovie}>Next Movie</button>
          */}
      </div>
    );
  }
}

export default Video;
