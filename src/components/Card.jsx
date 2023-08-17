import { useState } from "react";

const Card = ({ icon, title, description, serviceRequired }) => {
	const [clickedButton, setClickedButton] = useState();

	serviceRequired = clickedButton;

	return (
		<div className="w-64 flex flex-col rounded-md hover:shadow-lg justify-center items-center bg-white b-shadow-red my-4 mx-8 py-4 px-8 cursor-pointer">
			<i className={`fa fa-xl ${icon} p-8 text-rose-400`}></i>
			<h1 className="text-gray-800 text-xl uppercase font-bold mb-2">{title}</h1>
			<p className="text-center">{description}</p>
			<button onClick={((event) => setClickedButton(event))} className="w-full bg-blue-400 text-white p-2 font-bold rounded">OK</button>
		</div>
	)
}

export default Card;