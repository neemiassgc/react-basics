class Button extends React.Component {

	constructor(props) {
		super(props)
		this.state = {toggle: false}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(a, b, e) {
		this.setState((prevState) => {
			return {toggle: !prevState.toggle}
		})

		console.log(b)
	}

	render() {
		return (
			<button className="bg-red-500 text-white rounded-lg p-4" onClick={this.handleClick.bind(this, 'Hello', 'hi')}>{this.state.toggle ? "On" : "Off"}</button>
		)
	}
}

ReactDOM.render(<Button/>, document.querySelector("#root"))