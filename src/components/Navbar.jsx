import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div>
			<Menu mode="horizontal">
				<Menu.Item key="one">
					<Link to="/episodes">Episodes</Link>
				</Menu.Item>
				<Menu.Item key="two">
					<Link to="/characters">Characters</Link>
				</Menu.Item>
				<Menu.Item key="three">
					<Link to="/locations">Location</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
