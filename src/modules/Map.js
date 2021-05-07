import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import toolshed from '../assets/toolShed.png'
class MapContainer extends React.Component {

  render() {  
    const email = this.props.authUser.email;
    const currentUser = this.props.allUsers.find(user => user.email === email);
    return (
      <>
        <Map google={this.props.google} zoom={17} initialCenter={{ lat: currentUser.location[0], lng: currentUser.location[1] }}>
          {this.props.users.map((user, idx) => (
            <Marker 
            key={idx}
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSuLQnX_nzzV4VNBUBhqKB5yAKYIsTb3I'
})(MapContainer);
