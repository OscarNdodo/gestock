import { useState } from "react";
import Account from "../components/Account";
import Client from "../components/Client";
import NewClient from "../components/NewClient";
import NewProduct from "../components/NewProduct";

const Sell = () => {
	const [inputValue, setInputValue] = useState("");

	//Data
	const clients = [
		{ id: 1, name: "Nenhum", account: 0 },
		{ id: 2, name: "Nenhum", account: 0 },
	]
	//Conditions
	const addProduct = false;
	const value = (event) => {
		setInputValue(event.target.value);
	}
	const button = (event) => {
		event.preventDefault();
		if (inputValue.length < 1) {
			console.log("Campo Vazio")
		}
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<NewClient event={value} button={button} />
			{/* <h1 className="mt-8 uppercase text-blue-600 font-extrabold underline">Clientes pendentes</h1> */}
			{

			}
			{/* <div className="flex items-center justify-center flex-wrap">

			</div> */}
		</div>
	)
}

export default Sell;