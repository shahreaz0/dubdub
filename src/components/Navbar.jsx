import React, { useState } from "react";
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
					<a href="#">Episodes</a>
				</Menu.Item>
				<Menu.Item key="two">
					<a href="#">Characters</a>
				</Menu.Item>
				<Menu.Item key="three">
					<a href="#">Location</a>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
