import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import TODO_ABI from "../contractsData/Todo.json";
import TODO_ADDRESS from "../contractsData/Todo-address.json";
// import { addTodo } from "./helperFunc";

function App() {
	const [todos, setTodos] = useState<[]>();
	const [todoContracts, setTodoContracts] = useState<any>();
	const [signer, setSigner] = useState();
	const [loading, setIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState();
	async function connectToWallet() {
		let provider;
		if (window?.ethereum === null) {
			alert("Please install Metamask\n using read-only default");
			provider = ethers.getDefaultProvider();
		} else {
			provider = new ethers.BrowserProvider(window?.ethereum as any);
			setSigner((await provider.getSigner()) as any);
			fetchTodos((await provider.getSigner()) as any);
		}
	}
	const todoContract = (_signer: any) =>
		new ethers.Contract(TODO_ADDRESS.address, TODO_ABI.abi, _signer);
	const addTodo = async (todoContract: any, todo: string) => {
		setIsLoading(true);
		if (await todoContract.addTodo(todo)) {
			setIsLoading(false);
		}
		todoContract.on("itemLog", () => {
			fetchTodos(signer);
		});
	};

	async function fetchTodos(_signer: any) {
		const todoContracts = todoContract(_signer);
		setTodoContracts(todoContracts as any);

		let todoTemp = [];
		const totalCount = await todoContracts.todoCount();
		for (let i = 0; i < totalCount; i++) {
			const todos = await todoContracts.todos(i);
			todoTemp.push(todos);
		}
		setTodos(todoTemp as any);
		todoTemp.sort((a: any, b: any) => (b.index > a.index ? 1 : -1));
	}

	function updateTodo(id: number) {
		todoContracts.completeTodo(id);

		todoContracts.on("itemLog", () => {
			fetchTodos(signer);
		});
	}
	useEffect(() => {
		connectToWallet();
	}, []);

	return (
		<>
			<nav className="flex justify-between mx-auto container sticky top-0">
				<div className="font-extrabold text-2xl text-green-500">
					Guild Audit
				</div>
				<div className="">
					<button className="" onClick={connectToWallet}>
						{signer ? "Connected" : "Connect Wallet"}
					</button>
				</div>
			</nav>
			<main className="mx-auto container relative">
				<div className=" bg-black bg-opacity-15 max-w-fit rounded-lg overflow-hidden mx-auto mb-7 mt-32">
					<input
						type="text"
						className="ml-2 outline-none bg-transparent"
						onChange={e => setInputValue(e.target.value as any)}
					/>
					<button
						className={` bg-slate-800 text-white p-2 hover:text-black hover:bg-slate-300 ${
							loading ? "animate-spin" : ""
						}`}
						onClick={async () =>
							await addTodo(todoContracts, inputValue as any)
						}>
						{loading ? (
							<span className="animate-spin p-2 rounded-full h-4 w-4 border-b-2 border-gray-900">
								O
							</span>
						) : (
							"Add Todo"
						)}
					</button>
				</div>
				{todos?.map((todo: any) => (
					<div
						className={`${
							!todo.done ? "bg-red-400" : "bg-green-400"
						} bg-opacity-15 max-w-[300px] m-auto  mt-2 flex justify-between rounded-lg overflow-hidden items-center`}
						key={todo.index}>
						<p className="px-2">{todo[0]} </p>

						<button
							onClick={() => {
								updateTodo(todo.index);
							}}
							className={`${
								!todo.done
									? "bg-red-700 text-white"
									: "font-semibold bg-green-700"
							} p-2`}>
							{todo.done ? "✅" : "Done"}
						</button>
					</div>
				))}
			</main>
			<footer className="mx-auto container"></footer>
		</>
	);
}

export default App;
