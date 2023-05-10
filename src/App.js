import logo from "./logo.svg";

import "./App.css";

import { useEffect, useState } from "react";

import Todos from "./Todos/Todos";

import DataBoard from "./DataBoard/DataBoard";

function App() {
	const [name, setName] = useState("Peter");

	const [address, setAddress] = useState("");

	const [todos, setTodos] = useState([
		{
			title: "ReactJs",
		},
		{
			title: "React Native",
		},
		{
			title: "NodeJs",
		},
	]);

	useEffect(() => {
		setName(address);
		console.log("React Native");
	}, []);

	const handleClick = () => {
		if (!address) {
			alert("Null!!!!");
		}

		const newTodo = {
			title: address,
		};

		setTodos([...todos, newTodo]);
		setAddress("");
	};

	const handleValueChange = (e) => {
		setAddress(e.target.value);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>Code ReactJs with {name}</h1>

				<Todos todos={todos} />

				<input onChange={(e) => handleValueChange(e)} value={address} />

				<button onClick={handleClick}>Click</button>
				<br />
				<h2>Checking Covid In VietNam</h2>
				<DataBoard />
			</header>
		</div>
	);
}

export default App;
