import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Row, Col, Card, Image, Descriptions } from "antd";
const { Meta } = Card;
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
	if (error) return <p>Error :(</p>;

	const { name, species, status, image, type, gender, origin } =
		data.character;

	return (
		<div className="m-lg">
			<Row>
				<Col xs={24} sm={8} md={6} lg={6}>
					<Image src={image} height="100%" width="100%" />
				</Col>
				<Col xs={24} sm={16} md={18} lg={18} className="character-box">
					<Card>
						<Descriptions
							title={name}
							column={{
								xxl: 2,
								xl: 2,
								lg: 2,
								md: 2,
								sm: 2,
								xs: 1,
							}}
						>
							<Descriptions.Item label="Status">
								{status}
							</Descriptions.Item>
							<Descriptions.Item label="Species">
								{species}
							</Descriptions.Item>
							<Descriptions.Item label="Type">
								{type || "Unknown"}
							</Descriptions.Item>
							<Descriptions.Item label="Gender">
								{gender}
							</Descriptions.Item>
							<Descriptions.Item label="Origin">
								{origin.name}
							</Descriptions.Item>
							<Descriptions.Item label="Origin Type">
								{origin.type}
							</Descriptions.Item>
						</Descriptions>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Character;
