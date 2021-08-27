import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout } from "antd";
const { Header } = Layout;
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<Layout className="layout">
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<Menu mode="horizontal" defaultSelectedKeys={["home"]}>
					<Menu.Item key="home">
						<NavLink to="/">Home</NavLink>
					</Menu.Item>
					<Menu.Item key="characters">
						<NavLink to="/characters">Characters</NavLink>
					</Menu.Item>
					<Menu.Item key="episodes">
						<NavLink to="/episodes">Episodes</NavLink>
					</Menu.Item>
					<Menu.Item key="locations">
						<NavLink to="/locations">Location</NavLink>
					</Menu.Item>
				</Menu>
			</Header>
		</Layout>
	);
};

export default Navbar;
