import './App.css';
import React from 'react';
import axios from 'axios';
import { Container, Navbar, } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './modules/Header';
import MapContainer from './modules/Map.js';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './modules/Profile.js'

const API_Server = process.env.REACT_APP_API_URL;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      allUsers: [],
      category: '',
      selectedUser: [],
      showModal: false,
      centeredMapUser:{},
      selectedValue: 'carpentry'
    }
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  getSelectedUser = async (e) => {
    const response = await axios.get(`${API_Server}user/${e.value}`);
    this.setState({ selectedUser: response.data, showModal: true });
  }

  getUsers = async () => {
    const response = await axios.get(`${API_Server}`);
    const users = response.data;
    this.setState({ allUsers: users, users });
  }

  getQuery = async (e) => {
    const query = e.target.value.toLowerCase();
    const response = await axios.get(`${API_Server}users/?category=${query}`);
    this.setState({ users: response.data });
  }

  getCurrentUser = (currentUser) => {
    this.setState(currentUser,);
  } 

  borrowTool = async (e) => {
    const values = e.target.value.split(',');
    const toolID = Number(values[0]);
    const borrowerID = values[1];
    const ownerID = this.state.selectedUser._id;

    await axios.put(`${API_Server}borrow/${ownerID}`, {borrowerID, toolID});
    await this.getUsers();
  }

  async componentDidMount() {
    await this.getUsers();
  }

  render() {
   
    return (
      <>
        <Router>
          <Switch>
            <Route path="/">
              <Container fluid>
                <Header 
                handleChange={this.getQuery} 
                selectedValue={this.state.selectedValue}
                category={this.state.category}
                />
                <Navbar bg="success">
                </Navbar>
                {this.state.users.length && this.props.auth0.isAuthenticated &&
                  <MapContainer
                    users={this.state.users}
                    allUsers={this.state.allUsers}
                    getSelectedUser={this.getSelectedUser}
                    authUser={this.props.auth0.user}
                    centeredUser={this.state.centeredMapUser}
                    centeredMapUser={this.centeredMapUser}>
                  </MapContainer>
                }
                {this.state.showModal ?
                  <Profile
                    selectedUser={this.state.selectedUser}
                    showModal={this.state.showModal}
                    handleClose={this.handleClose}
                    authUser={this.props.auth0.user}
                    allUsers={this.state.allUsers}
                    borrowTool={this.borrowTool}>
                  </Profile> : ''
                }
              </Container>
            </Route>

          </Switch>
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
