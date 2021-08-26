import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

const ALL_EPISODES = gql`
	{
		episodes {
			results {
				name
				episode
				id
			}
		}
	}
`;

const episodeList = (props) => {
	const { loading, error, data } = useQuery(ALL_EPISODES);

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

	const { results } = data.episodes;
	const cards = results.map((card, key) => (
		<Col xs={24} sm={8} lg={6} key={key}>
			<Link to={`/episode/${card.id}`}>
				<Card hoverable>
					<Meta title={card.name} description={card.episode} />
				</Card>
			</Link>
		</Col>
	));

	return (
		<div className="m-lg">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Episodes</div>
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
