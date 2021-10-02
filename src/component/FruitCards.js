import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FruitCards extends Component {
	render() {
		return this.props.FruitDataApi.map((obj) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.image} />
						<Card.Body>
							<Card.Title>{obj.name}</Card.Title>
							<Card.Text>{obj.price}</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.addtoFavourite(obj);
								}}
							>
								add to favourite
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FruitCards;
