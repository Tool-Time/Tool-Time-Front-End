import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Splash extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>Tool Time</h1>
        <p>Tools for sharing</p>
      </Jumbotron>
    )
  }
}