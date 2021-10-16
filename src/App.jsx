/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */

import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './modules/Header';
import MapContainer from './modules/MapContainer';
import Profile from './modules/Profile';

const API_Server = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function getUsers() {
    const response = await axios.get(`${API_Server}`);
    setUsers([...response.data]);
    setAllUsers([...response.data]);
  }

  const filterUsersByTool = useCallback(async (query) => {
    const response = await axios.get(`${API_Server}users/?category=${query}`);
    setUsers([...response.data]);
  }, []);

  const getSelectedUser = useCallback(async (e) => {
    const response = await axios.get(`${API_Server}user/${e.value}`);
    setSelectedUser(response.data);
    setShowModal(true);
  }, []);

  const borrowTool = useCallback(async (e) => {
    const values = e.target.value.split(',');
    const toolID = Number(values[0]);
    const borrowerID = values[1];
    const ownerID = selectedUser._id;

    await axios.put(`${API_Server}borrow/${ownerID}`, { borrowerID, toolID });
    await getUsers();
  }, []);

  useEffect(getUsers(), []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Container fluid>
              <Header
                filterUsersByTool={filterUsersByTool}
              />
              {users.length
                  && (
                  <MapContainer
                    users={users}
                    allUsers={allUsers}
                    setShowModal={setShowModal}
                    getSelectedUser={getSelectedUser}
                  />
                  )}
              {showModal
                  && (
                    <Profile
                      selectedUser={selectedUser}
                      showModal={showModal}
                      setShowModal={setShowModal}
                      allUsers={allUsers}
                      borrowTool={borrowTool}
                    />
                  )}
            </Container>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
