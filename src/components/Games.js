import React from 'react';
import { Tween } from 'react-gsap';
import axios from 'axios';

import {
    Button,
    Row,
    Col
} from 'react-bootstrap';

export default class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundImage: this.props.buttons[0].backgroundImage,
            description: this.props.buttons[0].description
        };
        this.gamesBG = React.createRef();
    }

    changeBG = (backgroundImage, description) => {
        if (this.state.backgroundImage !== backgroundImage) {
            this.setState({
                backgroundImage: backgroundImage,
                description: description
            });
            const bgTween = this.bgTween.getGSAP();
            bgTween.seek(0);
        }
    }
    
    componentDidMount() {
        this.props.buttons.forEach((picture) => {
            const img = new Image();
            img.src = picture.backgroundImage;
        });
        axios.get('http://dallenad.com/drupal/api/volunteertypes?_format=json')
			.then(response => {
                //this.setState({types: response.data})
                console.log(response.data)
			})
			.catch(error => {
				console.log(error);
			})
    }

	render() {
        const buttons = this.props.buttons;
		return (
            <section className="games ml-4 mr-4 pl-5 pr-5 pt-4 pb-2" >
            <Tween ref={ref => this.bgTween = ref} duration={0.5} from={{ autoAlpha: 0 }} >
                <div className="gamesBG" style={{backgroundImage: "url(" + this.state.backgroundImage + ")"}} ref={this.gamesBG} />
            </Tween>
            <Row>
                <Col md={6} className="gamesContent">
                    <h1 className="shadow-black">Games</h1>
                    <p className="shadow-black">ActionScript, JavaScript (Phaser), Unity (C#).</p>
                    {
                        buttons && buttons.map((value, index) => { return(
                            <p key={index}>
                                <Button
                                    href={value.href}
                                    target="_blank"
                                    onMouseOver={(e) => this.changeBG(value.backgroundImage, value.description)}
                                >
                                    {value.label}
                                </Button>
                            </p>
                        )})
                    }
                </Col>
                <Tween ref={ref => this.descTween = ref} duration={1} to={{ y: "-=5", repeat: -1, yoyo: true }} >
                    <Col md={6} className="d-none d-md-block m-auto pt-1 pb-2 game-description">{this.state.description}</Col>
                </Tween>
            </Row>
            </section>
		)
	}
}
