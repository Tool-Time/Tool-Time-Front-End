import './App.css';
import React from 'react';
import axios from 'axios';
import { Container, Card, Form, Button, Navbar} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './modules/Header';
import SearchForm  from './modules/SearchForm';

const API_Server = process.env.REACT_APP_API_URL;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      query: ''
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
                <Header />
                <Navbar bg="success">
                <SearchForm onChange={this.getQuery} />
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
