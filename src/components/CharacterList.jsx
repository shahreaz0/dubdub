import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;
import "./CharacterList.css";

const ALL_CHARACTERS = gql`
	{
		characters {
			results {
				name
				image
				id
			}
		}
	}
`;

const CharacterList = (props) => {
	const { loading, error, data } = useQuery(ALL_CHARACTERS);

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

	const { results } = data.characters;
	const cards = results.map((card, key) => (
		<Col xs={24} sm={8} lg={6} key={key}>
			<Link to={`/${card.id}`}>
				<Card
					loading={loading}
					hoverable
					cover={<img alt={card.name} src={card.image} />}
				>
					<Meta title={card.name} />
				</Card>
			</Link>
		</Col>
	));

	return (
		<div className="m-lg">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Characters</div>
				</Col>

				<Col xs={24} md={18} lg={18}>
					<Row gutter={[24, 16]}>{cards}</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CharacterList;
