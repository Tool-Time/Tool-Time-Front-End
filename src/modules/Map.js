import React from 'react';
// import {Marker, InfoWindow} from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
class MapContainer extends React.Component {

  render() {
    // set logic for user arrays to tie into auth0 user prop. 
    
const email = this.props.authUser.email;
const currentUser = this.props.users.filter(user => user.email === email);


    return (
      <>
        <Map google={this.props.google} zoom={10} initialCenter={{ lat: currentUser[0].location[0], lng: currentUser[0].location[1] }}>

         
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{'Dope Place Coming Soonz'}</h1>
            </div>

          </InfoWindow>
          {this.props.users.map((user) => (
            <Marker 
            position={{lat: user.location[0], lng: user.location[1]}}
            value={user._id} 
            onClick={this.props.getSelectedUser} />
              ))}
        </Map>
      </>
    );
  }
}

//FISH TANK
//  this.props.authUser.location[0], lon: this.props.authUser.location[1]}}>

export default GoogleApiWrapper({
          apiKey: 'AIzaSyBSuLQnX_nzzV4VNBUBhqKB5yAKYIsTb3I'
})(MapContainer);