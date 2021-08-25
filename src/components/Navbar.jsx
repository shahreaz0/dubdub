import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./Navbar.css";

const Navbar = (props) => {
	const [current, setCurrent] = useState("one");

	const handleClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		<div>
			<Menu
				onClick={handleClick}
				selectedKeys={[current]}
				mode="horizontal"
			>
				<Menu.Item key="one">
					<Link to="/">Episodes</Link>
				</Menu.Item>
				<Menu.Item key="two">
					<Link to="/characters">Characters</Link>
				</Menu.Item>
				<Menu.Item key="three">
					<Link to="/">Location</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
