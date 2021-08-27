import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

// gql query
const ALL_LOCATIONS = gql`
	{
		locations {
			results {
				name
				type
				id
			}
		}
	}
`;

const episodeList = () => {
	// hook
	const { loading, error, data } = useQuery(ALL_LOCATIONS);

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

	const { results } = data.locations;
	const cards = results.map((card, key) => (
		<Col xs={24} sm={8} lg={6} key={key}>
			<Link to={`/locations/${card.id}`}>
				<Card hoverable>
					<Meta title={card.name} description={card.type} />
				</Card>
			</Link>
		</Col>
	));

	return (
		<div className="m-lg">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Locations</div>
				</Col>

				<Col xs={24} md={18} lg={18}>
					<Row gutter={[24, 16]} className="cards">
						{cards}
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default episodeList;
