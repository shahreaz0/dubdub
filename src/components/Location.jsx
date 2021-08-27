import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Row, Col, Card, Divider, Avatar } from "antd";
const { Meta } = Card;

const Location = (props) => {
	const { id } = props.match.params;
	// gql query
	const LOCATION = gql`
		{
			location(id: "${id}") {
				name
				type
				dimension
				residents {
					id
					name
					image
				}
			}
		}
	`;

	// hook
	const { loading, error, data } = useQuery(LOCATION);

	if (loading) {
		return (
			<div className="loader">
				<div className="lds-ripple">
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="loader">
				<p className="error">Error happened. Try Again.</p>
			</div>
		);
	}

	const { name, type, dimension, residents } = data.location;

	const characterCard = residents.map((character, key) => (
		<Col xs={24} sm={8} lg={6} key={key}>
			<Link to={`/characters/${character.id}`}>
				<Card hoverable size="small">
					<Meta
						avatar={<Avatar src={character.image} />}
						title={character.name}
					/>
				</Card>
			</Link>
		</Col>
	));

	return (
		<div className="m-lg">
			<Row gutter={[16, 16]}>
				<Col lg={8} md={8} sm={8} xs={24}>
					<div className="card-area">
						<h3 className="head">Name</h3>
						<p className="text">{name}</p>
					</div>
				</Col>
				<Col lg={8} md={8} sm={8} xs={24}>
					<div className="card-area">
						<h3 className="head">Type</h3>
						<p className="text">{type}</p>
					</div>
				</Col>
				<Col lg={8} md={8} sm={8} xs={24}>
					<div className="card-area">
						<h3 className="head">Dimension</h3>
						<p className="text">{dimension}</p>
					</div>
				</Col>
			</Row>

			<Divider />
			<b className="characters">Resident's on this planet</b>

			<Row gutter={[8, 8]} className="py-2">
				{characterCard}
			</Row>
		</div>
	);
};

export default Location;
