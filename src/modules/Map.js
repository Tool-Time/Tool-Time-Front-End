import React from 'react';
// import {Marker, InfoWindow} from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {

  // const googleMapRef = useRef();

  // <div
  //   id="google-map"
  //   ref={googleMapRef}
  //   style={{ width: '400px', height: '300px' } />
render (){
  return(
    <>
   <Map google={this.props.google} zoom={14}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     <div>
       <h1>{'Dope Place Coming Soonz'}</h1>
     </div>
 </InfoWindow>
</Map>
</>
 );
}
}


export default GoogleApiWrapper({
//  apiKey: here
})(MapContainer);