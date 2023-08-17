import Navegation from "../components/Navegation";
import Report from "../components/Report";

const Admin = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-start sm:px-32">
			<Navegation />
			<Report />
			<Report />
			<Report />
			<Report />
		</div>
	)
}

export default Admin;