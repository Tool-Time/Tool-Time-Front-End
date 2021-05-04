import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './modules/Header';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //coming soon
    }
  }

  render(){
    return(
      <Container fluid>
        <Header />
        <img alt='kitten' src='http://placekitten.com/200/300'/>
      </Container>
    )
  }
}




export default App;
