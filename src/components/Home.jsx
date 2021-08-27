import React from "react";
import "./Home.css";

const Home = () => {
	return (
		<div className="Home">
			<div className="home-text">
				<p>Rick</p>
				<p className="and">And</p>
				<p>Morty</p>
			</div>
			<div className="home-img">
				<img
					src="https://res.cloudinary.com/dlfozpwa2/image/upload/v1630018543/WallpaperDog-16992087_1_yurmri.png"
					alt="Home image"
					width="300px"
				/>
			</div>
		</div>
	);
};

export default Home;
