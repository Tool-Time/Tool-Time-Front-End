import './App.css';
import React from 'react';
import { Container, Card, Form, Button, Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
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
      <>
        <Router>
          <Switch>
            <Route path="/">
              <Container fluid>
                <Header />
                <Navbar bg="success">
                  <Form inline>
                    <Form.Group >
                      <Form.Control type="text" placeholder="enter a category of tool">
                      </Form.Control>
                      <Button className="ml-2">Submit</Button>
                    </Form.Group>
                  </Form>
                </Navbar>
                  <Card.Img
                  alt='kitten' 
                  src='http://placekitten.com/1920/600'
                  className="radius-0"
                  />
              </Container>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}




export default App;
