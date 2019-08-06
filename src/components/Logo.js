import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../json/logo/logo.json';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

	render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

		return (
            <Lottie options={defaultOptions}
            height={"100%"}
            width={50}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}/>
		)
	}
}
