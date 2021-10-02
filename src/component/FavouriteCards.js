import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FavouriteCards extends Component {
	render() {
		return this.props.favDataApi.map((obj) => {
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
									this.props.removeFavourite(obj.slug);
								}}
							>
								delete
							</Button>

							<Button
								variant="primary"
								onClick={(e) => {
									this.props.showFormUpdate(obj.slug, obj.name, obj.price);
								}}
							>
								update
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FavouriteCards;
