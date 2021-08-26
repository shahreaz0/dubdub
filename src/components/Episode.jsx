import React from "react";
import { useQuery, gql } from "@apollo/client";

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

	const { name, air_date, episode } = data.episode;

	return (
		<div className="m-lg">
			<h1>{name}</h1>
			<p>{air_date}</p>
			<p>{episode}</p>
		</div>
	);
};

export default Episode;
