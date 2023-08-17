const Report = () => {
	return (
		<ul className="w-full flex items-center justify-around py-4 bg-white b-shadow mt-5 rounded">
			<li className="fa fa-xl fa-file-pdf text-red-700 opacity-80 hover:text-red-600"></li>
			<li className="text-gray-800">05/06/2024</li>
			<li className="text-gray-500">Entrada</li>
			<li className="fa fa-xl fa-file-pdf text-blue-400 hover:text-blue-500 cursor-pointer fa-download"></li>
		</ul>
	)
}

export default Report;