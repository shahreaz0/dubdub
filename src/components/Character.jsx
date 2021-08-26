import React from "react";
import { useQuery, gql } from "@apollo/client";
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
				origin {
					name
					type
				}
				image
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

	const { name, species, status } = data.character;

	return (
		<div className="m-lg">
			<h1>{name}</h1>
			<p>{species}</p>
			<p>{status}</p>
		</div>
	);
};

export default Character;
