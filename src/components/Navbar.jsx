import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";

const { Header } = Layout;

import "./Navbar.css";

const Navbar = (props) => {
	return (
		<Layout>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
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
			</Header>
		</Layout>
	);
};

export default Navbar;
