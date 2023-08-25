import { useState } from "react";
import Container from "../components/Container";
import NavDash from "../components/NavDash";
import Query from "./Query";
import Register from "./Register";
import Sell from "./Sell";

const Seller = () => {
	const [sell, setSell] = useState(true);
	const [register, setRegister] = useState(false);
	const [query, setQuery] = useState(false);


	const option = (event) => {
		let opt = event.target.innerText.toLowerCase();
		switch (opt) {
			case "vender": {
				setQuery(false);
				setRegister(false);
				setSell(true);
				break;
			}
			case "registrar": {
				setQuery(false);
				setSell(false);
				setRegister(true);
				break;
			}
			case "consultar": {
				setSell(false);
				setRegister(false);
				setQuery(true);
				break;
			}
		}
	}

	return (
		<div>
			<NavDash clickedItem={option} />

			{
				sell ? <Sell /> : register ? <Register /> : query ? <Query /> : <Container />
			}
		</div>
	)
}


export default Seller;