import React from 'react';
// import {Marker, InfoWindow} from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Card from 'react-bootstrap/Card'

class MapContainer extends React.Component {

  // const googleMapRef = useRef();

  // <div
  //   id="google-map"
  //   ref={googleMapRef}
  //   style={{ width: '400px', height: '300px' } />
  render() {
    // set logic for user arrays to tie into auth0 user prop. 
    return (
      <>
        <Map google={this.props.google} zoom={10}  initialCenter={{lat: this.props.authUser.location[0], lon: this.props.authUser.location[1]}}>

          {/* <Marker onClick={this.onMarkerClick}
            name={'Current location'}/> */}
          <Card> {this.props.users[0].name} </Card>
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{'Dope Place Coming Soonz'}</h1>
            </div>
            
          </InfoWindow>
          {this.props.users.map((user) => (
            <Marker position={{ lat: user.location[0], lng: user.location[1] }} />

          ))}
        </Map>
      </>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSuLQnX_nzzV4VNBUBhqKB5yAKYIsTb3I'
})(MapContainer);