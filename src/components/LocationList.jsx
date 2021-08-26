import React from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

const episodeList = (props) => {
	return (
		<div className="m-lg">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Locations</div>
				</Col>

				<Col xs={24} md={18} lg={18}>
					<Row gutter={[24, 16]} className="cards">
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="Earth (C-137)"
									description="Planet"
								/>
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta title="Abadango" description="Cluster" />
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="citadel of Ricks"
									description="Space station"
								/>
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="Worldender's lair"
									description="Planet"
								/>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default episodeList;
