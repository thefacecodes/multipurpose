import React, { useState, useRef } from "react";
import music from "./music.json";

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      playState: false,
      value: 0,
      recentlyPlayed: [],
      animationState: "paused",
    };

    this.style = {
      background: `url( http://storage.googleapis.com/automotive-media/${
        music.music[this.state.index].image
      })`,
      animationPlayState: this.state.animationState,
    };

    this.playRef = React.createRef();
  }

  prevSong = () => {
    this.setState((state) => ({
      index: this.state.index - 1,
    }));
    this.playPause();
  };

  nextSong = () => {
    this.setState((state) => ({
      index: this.state.index + 1,
    }));

    this.playPause();
  };

  playPause = () => {
    if (!this.state.playState) {
      this.setState((state) => ({
        playState: true,
        animationState: "runnning",
        recentlyPlayed: [
          ...state.recentlyPlayed,
          music.music[state.index].title,
        ],
      }));
      this.playRef.current.play();
      // this.style.animationPlayState = "running";

      console.log(this.playRef.current);
    } else {
      this.playRef.current.pause();

      this.setState((state) => ({
        playState: false,
        animationState: "paused",
      }));
      this.style.animationPlayState = "paused";
    }
  };

  // const ;
  // let [index, setIndex] = useState(0);
  // let [playAudio, playPause] = useState(false);
  // let [song, setSong] = useRef();

  // console.log(music);
  // const source =;
  // console.log();

  render() {
    return (
      <div className="music">
        <h1>Play all your favorite music</h1>
        <div className="player-container">
          <div className="details">
            <div className="_one">
              <h2>Recently Played</h2>
              <ul className="list">
                {this.state.recentlyPlayed.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div className="_two">
              <h2>Library</h2>
              <ul className="list">
                {music.music.map((song) => (
                  <li>{song.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="player">
            <h2>Audio Player</h2>
            <div style={this.style} className="disc">
              <div className="disc-cutter"></div>
            </div>
            <h3>{music.music[this.state.index].title}</h3>
            <h4>{music.music[this.state.index].artist}</h4>
            <input type="range" name="" id="" value={this.state.value} />
            <audio
              src={`http://storage.googleapis.com/automotive-media/${
                music.music[this.state.index].source
              }`}
              ref={this.playRef}
            ></audio>
            <div className="controls">
              {/* <i className="fa-solid fa-shuffle"></i> */}
              <i onClick={this.prevSong} className="fa-solid fa-backward"></i>

              {this.state.playState ? (
                <i
                  onClick={this.playPause}
                  style={{ fontSize: "3em", margin: "0 0.5em" }}
                  className="fa-solid fa-pause"
                ></i>
              ) : (
                <i
                  onClick={this.playPause}
                  style={{ fontSize: "3em", margin: "0 0.5em" }}
                  className="fa-solid fa-play"
                ></i>
              )}

              {/* */}
              <i onClick={this.nextSong} className="fa-solid fa-forward"></i>
              {/* <i className="fa-solid fa-repeat"></i> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// document.querySelector(".disc").style.background =
//   "url" +
//   `(http://storage.googleapis.com/automotive-media/$)`;
// <img
// src={`http://storage.googleapis.com/automotive-media/${music.music[2].image}`}
// alt=""
// />

export default Music;
