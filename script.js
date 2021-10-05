class UserGreeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<h1>Welcome back!</h1>)
    }
}

class GuestGreeting extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<h2>Please sign up.</h2>)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLoggedIn: this.props.isLoggedIn}
    }

    componentDidMount() {
        this.timer = setInterval(this.toggle.bind(this), 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    toggle() {
        this.setState((previousState) => ({isLoggedIn: !previousState.isLoggedIn}))
    }

    render() {
        return this.state.isLoggedIn ? (<UserGreeting/>) : (<GuestGreeting/>)
    }
}

ReactDOM.render(<App isLoggedIn={false}/>, document.querySelector("#root"))