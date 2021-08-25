import React, { useState } from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;
import "./CharacterList.css";

const CharacterList = (props) => {
	return (
		<div className="CharacterList">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Characters</div>
				</Col>

				<Col xs={24} md={18} lg={18}>
					<Row gutter={[24, 16]}>
						<Col xs={24} sm={8} lg={6}>
							<Card
								hoverable
								cover={
									<img
										alt="example"
										src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
									/>
								}
							>
								<Meta title="Rick Sanchez" />
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card
								hoverable
								cover={
									<img
										alt="example"
										src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
									/>
								}
							>
								<Meta title="Morty Smith" />
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card
								hoverable
								cover={
									<img
										alt="example"
										src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
									/>
								}
							>
								<Meta title="Summer Smith" />
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card
								hoverable
								cover={
									<img
										alt="example"
										src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
									/>
								}
							>
								<Meta title="Beth Smith" />
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default CharacterList;
