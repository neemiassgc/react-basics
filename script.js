function List({ number }) {
	let nums = []
	for (let i = 1; i <= number; i++) nums.push(i)

	nums = nums.map(i => <li key={i+""}>{i}</li>)

	return (<ul>{nums}</ul>)
}

ReactDOM.render(<List number={5} />, document.querySelector("#root"))