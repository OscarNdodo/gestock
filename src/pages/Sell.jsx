import { useState } from "react";
import Account from "../components/Account";
import Client from "../components/Client";
import NewClient from "../components/NewClient";
import NewProduct from "../components/NewProduct";

const Sell = () => {
	//Data
	let inputValue;
	// let clientes = new Array();

	//Conditions
	const [addProduct, setAddProduct] = useState(false);
	const [addClient, setAddClient] = useState(false);
	const [clientes, setClientes] = useState([])


	//Functions
	const value = (event) => {
		inputValue = event.target.value;
	}

	const button = (event) => {
		event.preventDefault();
		setClientes([inputValue]);
		setAddClient(false);
		setAddProduct(true);
		const i = event.target.parentNode.children[0].value = "";
		console.log(clientes);
	}

	const getData = (event) => {
		event.preventDefault();
		setAddProduct(false);
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<NewClient event={value} button={button} />
			<div className="flex items-center justify-center flex-wrap">
				{
					addClient && (
						clientes.map((element, index) => (<Client key={index} name={element} />))
					)
				}
			</div>
			{
				addProduct && (
					<NewProduct event={getData} />
				)
			}
			<Client />
			<Account />
		</div>
	)
}

export default Sell;