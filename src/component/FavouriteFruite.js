import React, { Component } from "react";
import axios from "axios";
import FavouriteCards from "./FavouriteCards";
import { Row } from "react-bootstrap";
import Form from "./Form";
export class FavouriteFruite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showFavouriteData: false,
			favDataApi: [],
			showForm: false,
			slug: "",
			name: "",
			price: "",
		};
	}

	componentDidMount = async () => {
		const request = await axios.get("http://localhost:4000/fruit/favourite");
		this.setState({
			favDataApi: request.data,
			showFavouriteData: true,
		});
	};

	removeFavourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:4000/fruit/favourite/${slug}`
		);
		this.setState({
			favDataApi: request.data,
			showFavouriteData: true,
		});
	};

	showFormUpdate = async (slug, name, price) => {
		this.setState({
			slug: slug,
			name: name,
			price: price,
			showForm: true,
		});
	};
	updateData = async (e) => {
		e.preventDefault();
		const updated = { name: this.state.name, price: this.state.price };
		console.log(updated);
		const request = await axios.put(
			`http://localhost:4000/fruit/favourite/${this.state.slug}`,
			updated
		);
		this.setState({
			favDataApi: request.data,
			showFavouriteData: true,
		});
	};
	updateName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	updatePrice = (e) => {
		this.setState({
			price: e.target.value,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						price={this.state.price}
						name={this.state.name}
						updateData={this.updateData}
						updateName={this.updateName}
						updatePrice={this.updatePrice}
					/>
				)}
				{this.state.showFavouriteData && (
					<FavouriteCards
						favDataApi={this.state.favDataApi}
						removeFavourite={this.removeFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default FavouriteFruite;
