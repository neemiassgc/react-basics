class Input extends React.Component {

	constructor(props) {
		super(props)
	}

	handleChange(event) {
		this.props.onHandleChange(event.target.value)
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

class Output extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h3>{this.props.text}</h3>
			</div>
		);
	}
}

class Panel extends React.Component {

	constructor(props) {
		super(props)
		this.state = {value: ""}
	}

	handleChange(value) {
		this.setState({value: value})
	}

	render() {
		return (
			<div>
				<Output text={this.state.value} />
				<Input onHandleChange={this.handleChange.bind(this)}/>
			</div>
		);
	}
}

ReactDOM.render(<Panel />, document.querySelector("#root"))