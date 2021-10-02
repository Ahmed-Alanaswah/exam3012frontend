import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export class Header extends Component {
	render() {
		return (
			<Nav>
				<Nav.Item>
					<NavLink to="/">home</NavLink>
				</Nav.Item>
				<Nav.Item>
					<NavLink eventKey="link-1" to="/favourite">
						favourite
					</NavLink>
				</Nav.Item>
			</Nav>
		);
	}
}

export default Header;
