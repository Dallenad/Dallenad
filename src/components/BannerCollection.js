import React from 'react';
import Iframe from 'react-iframe';
import { Row } from 'react-bootstrap';

export default class BannerCollection extends React.Component {
	render() {
        const banners = this.props.banners;
		return (
			<section fluid="true" className="intro text-light ml-4 mr-4 mb-5 pl-4 pr-4 pt-3 pb-1" >
                <h1>Animated Banners</h1>
                <p>HTML5 banners for desktop, animated with GSAP.</p>
                <Row>
                {
                    banners && banners.map((value, index) => { return(
                        <Iframe key={index} url={value.href} width={value.width} height={value.height} frameBorder="0" scrolling="no" className="mr-1 mb-1" />
                    )})
                }
                </Row>
            </section>
		)
	}
}