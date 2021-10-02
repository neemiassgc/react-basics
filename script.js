'use strict';

function Greeting(props) {
	console.log(props)
	return (
		<div>
			<h1 className="text-black text-center">Welcome, {props.name}!. You're {props.age} years old, right?</h1>
			<h1>{props.children}</h1>
		</div>
	)
}

function Print(props) {
	return (<p className={props.classes.join(" ")}>{props.children}</p>)
}

function App() {
	return (<Greeting name="Marco" age="31"><Print classes={["text-yellow-700", "text-center"]}>Hello</Print></Greeting>)
}

ReactDOM.render(
	<App/>,
	document.querySelector("#root")
);