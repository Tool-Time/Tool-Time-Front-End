import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import toolshed from '../assets/toolShed.png'
class MapContainer extends React.Component {

  render() {  
    const email = this.props.authUser.email;
    const currentUser = this.props.allUsers.find(user => user.email === email);
   
    return (
      <>
        <Map  google={this.props.google} zoom={17} initialCenter={{ lat: currentUser.location[0], lng: currentUser.location[1], size:{width:'10px', height:'10px'} }}>
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
  apiKey: process.env.REACT_APP_GOOGLE_MAPS
})(MapContainer);
