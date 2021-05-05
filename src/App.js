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
      users: [],
      selectedUser:[]
    }
  }

getSelectedUser= async (e) => {
  const response = await axios.get(`${API_Server}user/${e.value}`);
  this.setState({selectedUser: response.data})
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
                  {this.state.users.length && this.props.auth0.isAuthenticated &&
                    <MapContainer 
                    users={this.state.users} 
                    getSelectedUser={this.getSelectedUser} 
                    authUser={this.props.auth0.user}>
                    </MapContainer>
                  }
                  {/* {this.state.selectedUser.length && <getUser> </getUser>} */}
              </Container>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
