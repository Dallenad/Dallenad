import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../json/intro.json';
import heroVideo from '../videos/Photomanip.mp4';

import {
    Row,
    Col,
	Jumbotron,
	Container
} from 'react-bootstrap';

export default class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

	render() {
        //let data = this.props.data;
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        
		return (
			<Jumbotron fluid="true">
                <Container className="d-none d-sm-block pl-3">
                    <Row>
                        <Col className="d-none d-lg-block hero-col1" lg={2} xl={3}>
                            <p className="text-white-50">Art and technology are my passions. I've got the skills of both a designer and a developer, from video edition to games, from HTML5 to JavaScript, and anything in-between.</p>
                        </Col>
                        <Col lg={10} xl={9}>
                            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop" >
                                <source src={heroVideo} type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                </Container>
                <Container className="d-block d-sm-none">
                    <Lottie
                    options={defaultOptions}
                    height={"47vh"}
                    width={"100%"}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
                </Container>
            </Jumbotron>
		)
	}
}
