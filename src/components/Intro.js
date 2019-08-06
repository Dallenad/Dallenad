import React from 'react';

export default class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.mapContainer = React.createRef();
    }

    apiKey = 'AIzaSyBlWs_p76IGB3rrCWIIpUkEm01tWMul2S4';
    
    render() {
		return (
			<section className="intro ml-4 mr-4 pl-5 pr-5 pt-4 pb-3"  >
                <h1>Greetings, good citizen!</h1>
                <p>Here you'll find some samples of my work as both a Developer and a Designer, which includes motion graphics and video editing, photo retouching and visual effects, banners, Web games, and even my regular CV.</p>
                <p>Thanks for stopping by!</p>
            </section>
		)
	}
}
