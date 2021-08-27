import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Row, Col, Card, Image } from "antd";
import "./Character.css";

const Character = (props) => {
	const { id } = props.match.params;

	const CHARACTER = gql`
		{
			character(id: "${id}") {
				name
				status
				species
				type
				gender
				image
				origin {
					name
					type
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(CHARACTER);

	if (loading)
		return (
			<div className="loader">
				<div className="lds-ripple">
					<div></div>
					<div></div>
				</div>
			</div>
		);

	if (error) {
		return (
			<div className="loader">
				<p className="error">Error happen. Try Again.</p>
			</div>
		);
	}

	const { name, species, status, image, type, gender, origin } =
		data.character;

	return (
		<div className="m-lg">
			<Row gutter={[8, 8]}>
				<Col xs={24} sm={8} md={6} lg={6}>
					<Image src={image} height="100%" width="100%" />
				</Col>
				<Col xs={24} sm={16} md={18} lg={18} className="character-box">
					<Row gutter={[8, 8]}>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Name</h3>
								<p className="text">{name}</p>
							</div>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Species</h3>
								<p className="text">{species}</p>
							</div>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Status</h3>
								<p className="text">{status}</p>
							</div>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Gender</h3>
								<p className="text">{gender}</p>
							</div>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Origin</h3>
								<p className="text">{origin.name}</p>
							</div>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<div className="card-area">
								<h3 className="head">Origin Type</h3>
								<p className="text">
									{origin.type || "Unknown"}
								</p>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default Character;
