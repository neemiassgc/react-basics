class Clock extends React.Component {

	constructor(props) {
		super(props)
		this.state = {date: new Date()}
	}

	componentDidMount() {
	    this.timerID = setInterval(() => this.tick(), 1000);
	}

  	componentWillUnmount() {
		clearInterval(this.timerID);
  	}

  	tick() {
  		this.setState((state, props) => ({date: new Date()}))
  	}

	render() {
		return (
			<div>
				<h1>Welcome, {this.props.name}!</h1>
				<Print colorClass={this.props.colorClass}>It is {this.state.date.toLocaleTimeString()}.</Print>
			</div>
		)
	}
}

class Print extends React.Component {
	constructor(props) {
		super(props)
		this.CSSClasses = ["text-center", "font-mono"]
	}

	render() {
		return (<h1 className={`${this.CSSClasses.join(" ")}, ${this.props.colorClass}`}>{this.props.children}</h1>)
	}
}

function App() {
	return (
		<div>
			<Clock name="Steven" colorClass="text-red-500"/>
			<Clock name="Bob" colorClass="text-blue-500"/>
			<Clock name="July" colorClass="text-yellow-500"/>
		</div>
	)
}

ReactDOM.render(<App/>, document.querySelector("#root"))