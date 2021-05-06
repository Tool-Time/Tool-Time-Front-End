import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import toolshed from '../assets/toolShed.png'
class MapContainer extends React.Component {

  render() {  
    const email = this.props.authUser.email;
    const currentUser = this.props.allUsers.find(user => user.email === email);
    return (
      <>
        <Map google={this.props.google} zoom={17} initialCenter={{ lat: currentUser.location[0], lng: currentUser.location[1] }}>
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
          {this.props.users.map((user) => (
            <Marker 
            position={{lat: user.location[0], lng: user.location[1]}}
            value={user._id} 
            onClick={this.props.getSelectedUser} 
            icon={toolshed}/>
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