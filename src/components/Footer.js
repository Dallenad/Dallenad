import React from 'react';
import bootstrapCertificate from '../images/bitdegree-bootstrap.png';
import responsiveCertificate from '../images/bitdegree-responsive.png';

import {
	Nav,
    Image,
    Row
} from 'react-bootstrap';

export default class Footer extends React.Component {

	render() {
        const navLinks = this.props.nav;
        return (
            <footer className="text-white-50 p-3 pr-4">
                <Nav className="justify-content-end">
                    <p className="mt-auto mb-auto">©2019, Daniel Ramírez</p>
                    { navLinks && navLinks.map((value, index) => { return (
                        <Nav.Link className="nav-link p-0 ml-3" href={value.href} alt={value.item} target="_blank" key={index} >
                            <Image src={value.icon} height={25} ></Image>
                        </Nav.Link>
                    )})}
                </Nav>
                <Row className="ml-3 mr-3 mt-2">
                    <a href="https://www.testdome.com/cert/3f221a5f192b42aea4aee1e71a7c70fb" className="testdome-certificate-stamp silver mr-3" target="_blank" rel="noopener noreferrer" title="HTML/CSS and React certificate"><span className="testdome-certificate-name">Daniel Ramírez</span><span className="testdome-certificate-test-name">HTML/CSS and React </span><span className="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                    <a href="https://www.testdome.com/cert/a412f412c4e5441ebaf3a93fd31f9275" className="testdome-certificate-stamp silver mr-3" target="_blank" rel="noopener noreferrer" title="JavaScript and React certificate"><span className="testdome-certificate-name">Daniel Ramírez</span><span className="testdome-certificate-test-name">HTML/CSS, JavaScript, and React </span><span className="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>
                    <a href="https://www.bitdegree.org/api/certificate?slug=bootstrap-tutorial&action=attachment&username=daniel-ramirez-rodriguez373709" target="_blank" rel="noopener noreferrer" title="Bootstrap 4 certificate" className="mr-3" ><img src={bootstrapCertificate} alt="Bootstrap 4 certificate" width="auto" height={120} className="certificate" ></img></a>
                    <a href="https://www.bitdegree.org/api/certificate?slug=responsive-web-design&action=attachment&username=daniel-ramirez-rodriguez373709" target="_blank" rel="noopener noreferrer" title="Responsive Web Design certificate"><img src={responsiveCertificate} alt="Responsive Web Design certificate" width="auto" height={120} className="certificate" ></img></a>
                </Row>
            </footer>
        )
	}
}
