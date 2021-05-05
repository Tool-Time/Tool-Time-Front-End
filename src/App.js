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
import MapContainer from './modules/Map.js';
import {withAuth0} from '@auth0/auth0-react';

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
    console.log(this.props.auth0);
    return(
      <>
        <Router>
          <Switch>
            <Route path="/">
              <Container fluid>
                <Header onChange={this.getQuery}/>
                <Navbar bg="success">
                </Navbar>
                  {/* <Card.Img
                  alt='kitten' 
                  src='http://placekitten.com/1920/600'
                  className="mt-4"
                  /> */}
                  {this.state.users.length >0 && this.props.auth0.isAuthenticated === true ? <MapContainer users={this.state.users} authUser={this.props.auth0.user}>
                    <Card/>
                  </MapContainer> : null}
              </Container>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
