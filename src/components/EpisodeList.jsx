import React from "react";
import { Row, Col, Card } from "antd";
const { Meta } = Card;

const episodeList = (props) => {
	return (
		<div className="m-lg">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={6} lg={6}>
					<div className="side-text">Episodes</div>
				</Col>

				<Col xs={24} md={18} lg={18}>
					<Row gutter={[24, 16]} className="cards">
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="Pilot"
									description="December 2, 2013"
								/>
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="LawnMower Dog"
									description="December 9, 2013"
								/>
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="Anatomy Park"
									description="December 16, 2013"
								/>
							</Card>
						</Col>
						<Col xs={24} sm={8} lg={6}>
							<Card hoverable>
								<Meta
									title="M. Night Shaym-Aliens!"
									description="January 13, 2014"
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
