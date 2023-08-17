import Container from "../components/Container";
import NavDash from "../components/NavDash";
import Query from "./Query";
import Register from "./Register";
import Sell from "./Sell";

const Seller = () => {
	const sell = true;
	const register = false;
	const query = false;

	return (
		<div>
			<NavDash />

			{
				sell ? <Sell /> : register ? <Register /> : query ? <Query /> : <Container />
			}
		</div>
	)
}


export default Seller;