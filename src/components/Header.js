import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

import {
	Row,
	Navbar,
	Nav,
	Col
} from 'react-bootstrap';

export default class Header extends React.Component {

	render() {
		const navLinks = this.props.nav;
		return (
			<header className="sticky-top">
				<Navbar variant="dark" expand="sm">
					<Navbar.Brand href="/" >
						<Row>
							<Col xs={3} ><Logo /></Col>
							<Col xs={9} >Daniel Ramírez</Col>
						</Row>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse className="justify-content-end">
						<Nav>
							{ navLinks && navLinks.map((value, index) => { return (
								<Link key={index} className="nav-link text-right" to={value.href} >{value.item}</Link>
							)})}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		)
	}
}
