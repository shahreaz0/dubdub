import React from "react";
import { useQuery, gql } from "@apollo/client";

const Location = (props) => {
	const { id } = props.match.params;

	const LOCATION = gql`
		{
			location(id: "${id}") {
				name
				type
				dimension
				residents {
					name
					status
					species
					gender
				}
			}
		}
	`;

	const { loading, error, data } = useQuery(LOCATION);

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

	const { name, type, dimension } = data.location;

	return (
		<div className="m-lg">
			<h1>{name}</h1>
			<p>{type}</p>
			<p>{dimension}</p>
		</div>
	);
};

export default Location;
