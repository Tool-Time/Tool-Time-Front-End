/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */

import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import toolshed from '../assets/toolShed.png';

function MapContainer({
  authUser,
  allUsers,
  google,
  users,
  getSelectedUser,
}) {
  const { email } = authUser;
  const currentUser = allUsers.find((user) => user.email === email);
  return (
    <>
      <Map google={google} zoom={17} initialCenter={{ lat: currentUser.location[0], lng: currentUser.location[1], size: { width: '10px', height: '10px' } }}>
        {users.map((user) => (
          <Marker
            key={user.name}
            position={{ lat: user.location[0], lng: user.location[1] }}
            value={user._id}
            onClick={getSelectedUser}
            icon={toolshed}
          />
        ))}
      </Map>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS,
})(MapContainer);
