import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class GoogleMap extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        stores: [{latitude: 10, longitude: -83.7},
                {latitude: 9.8, longitude: -83.8},
                {latitude: 10.1, longitude: -83.9},
                {latitude: 9.7, longitude: -84},
                {latitude: 10.2, longitude: -84.1},
                {latitude: 9.6, longitude: -84.2}]
      }
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
      return (
          <Map
            google={this.props.google}
            zoom={8}
            style={{width: this.props.width, height: this.props.height}}
            initialCenter={{ lat: 9.9, lng: -84.1}}
            mapTypeId={'terrain'}
          >
            {this.displayMarkers()}
          </Map>
      );
    }
}

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBlWs_p76IGB3rrCWIIpUkEm01tWMul2S4'
  })(GoogleMap);