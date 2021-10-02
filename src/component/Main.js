import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import FruitCards from "./FruitCards";
export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			FruitDataApi: [],
			showFruitData: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get("http://localhost:4000/fruit");
		this.setState({
			FruitDataApi: request.data,
			showFruitData: true,
		});
		console.log(this.state.FruitDataApi);
	};

	addtoFavourite = async (obj) => {
		const request = await axios.post(
			"http://localhost:4000/fruit/favourite",
			obj
		);
		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showFruitData && (
					<FruitCards
						FruitDataApi={this.state.FruitDataApi}
						addtoFavourite={this.addtoFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Main;
