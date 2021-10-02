import React, { Component } from "react";

export class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.updateData}>
					<input
						type="text"
						onChange={this.props.updateName}
						value={this.props.name}
					/>
					<input
						type="text"
						onChange={this.props.updatePrice}
						value={this.props.price}
					/>
					<input type="submit" value="update" />
				</form>
			</div>
		);
	}
}

export default Form;
