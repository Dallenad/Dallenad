import React from 'react';

export default class NormalMap extends React.Component {
    googleMapRef = React.createRef();

    componentDidMount() {
        const googleMapScript = document.createElement('script');

        googleMapScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBlWs_p76IGB3rrCWIIpUkEm01tWMul2S4&libraries=places';

        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', {
            this.googleMap = createGoogleMap();
        })
    }

    createGoogleMap = () =>
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 16,
            center: {
                lat: 43.642567,
                lng: -79.387054,
            },
            disableDefaultUI: true,
        })

    createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: 43.642567, lng: -79.387054 },
            map: this.googleMap,
        })

    render() {
        return(
            <div id="google-map" ref={this.googleMapRef} style={{ width: '400px', height: '300px' }} />
        )
    }
}