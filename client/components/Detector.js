import React, {Component} from 'react'
import {bindPage} from './camera'

class Detector extends Component {
  componentDidMount() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia
    // kick off the demo
    bindPage()
  }

  render() {
    return (
      <div>
        Hello
        <div id="info" />
        <div id="loading" />
        <div />
        <div id="main">
          <video id="video" playsinline />
          <canvas id="output" />
        </div>
      </div>
    )
  }
}

export default Detector
