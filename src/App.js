import './App.css';
import React from 'react';
import axios from 'axios';
import { Container, Card, Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './modules/Header';

const API_Server = process.env.REACT_APP_API_URL;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  getUsers = async () => {
    const response = await axios.get(`${API_Server}`);
    const users = response.data;
    this.setState({ users });
  }

  getQuery = async (e) => {
    e.preventDefault();
    const query = e.target.value.toLowerCase();
    const response = await axios.get(`${API_Server}users/?category=${query}`);
    this.setState({users: response.data});
  }

  async componentDidMount() {
    await this.getUsers();
  }

  render() {
    return(
      <>
        <Router>
          <Switch>
            <Route path="/">
              <Container fluid>
                <Header onChange={this.getQuery}/>
                <Navbar bg="success">
                </Navbar>
                  <Card.Img
                  alt='kitten' 
                  src='http://placekitten.com/1920/600'
                  className="mt-4"
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
