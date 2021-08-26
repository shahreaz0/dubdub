import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Card, Divider, Avatar } from "antd";
const { Meta } = Card;
import "./Episode.css";

const Episode = (props) => {
	const { id } = props.match.params;

	const CHARACTER = gql`
		{
			episode(id: "${id}") {
				name
				air_date
				episode
				characters {
					name
					image
					id
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
	if (error) return <p>Error :(</p>;

	const { name, air_date, episode, characters } = data.episode;
	const characterCard = characters.map((character, key) => (
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
						<h3 className="head">Air Date</h3>
						<p className="text">{air_date}</p>
					</div>
				</Col>
				<Col lg={8} md={8} sm={8} xs={24}>
					<div className="card-area">
						<h3 className="head">Episode</h3>
						<p className="text">{episode}</p>
					</div>
				</Col>
			</Row>

			<Divider />
			<b className="characters">Character's in this episode</b>

			<Row gutter={[8, 8]} className="py-2">
				{characterCard}
			</Row>
		</div>
	);
};

export default Episode;
