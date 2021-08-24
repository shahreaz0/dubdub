import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
	return (
		<div>
			<nav
				className="uk-navbar-container uk-margin"
				uk-navbar="mode: click"
			>
				<div className="uk-navbar-left">
					<ul className="uk-navbar-nav">
						<li className="uk-active">
							<a href="#">Dubdub</a>
						</li>
						<li>
							<a href="#">Charecters</a>
						</li>
						<li>
							<a href="#">Locations</a>
						</li>
						<li>
							<a href="#">Episodes</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
