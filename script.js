class Form extends React.Component {

	constructor(props) {
		super(props)
		this.state = {value: ''}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
	    alert(`A name was submitted: ${this.state.value}`);
	    event.preventDefault();
	 }

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<label>
					Name:
					<input type="text" name="name" onChange={this.handleChange.bind(this)}/>
				</label>
				<div>
					<Select />
				</div>
				<button className="p-2 rounded-md mt-3 text-white bg-red-500" type="submit">Submit</button>
			</form>
		);
	}
}

class Select extends React.Component {

	constructor(props) {
		super(props)
		this.state = {value: "Limon"}
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	render() {
		return (
			<select className="mt-2 p-1 bg-white text-black rounded-sm" onChange={this.handleChange.bind(this)}>
				<option value="">Limon</option>
				<option value="">Apple</option>
				<option value="">Strawberry</option>
				<option value="">Watermelon</option>
			</select>
		)
	}
}


ReactDOM.render(<Form/>, document.querySelector("#root"))