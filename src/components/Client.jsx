const Client = ({ name, account }) => {
	return (
		<div className="w-56 flex flex-col rounded-md hover:shadow-lg justify-center items-center bg-white b-shadow my-4 mx-8 py-4 px-8 cursor-pointer">
			<i className={`fa fa-lg fa-user p-8 text-gray-400`}></i>
			<h1 className="text-gray-800 text-xl uppercase font-bold mb-1">{name}</h1>
			<p className="text-center py-2 text-lg">{account} MZN</p>
			<button className="py-2 mt-2 bg-green-400 text-white rounded hover:bg-green-300 font-semibold w-full">Novo</button>
			<button className="py-2 mt-2 bg-blue-400 text-white rounded hover:bg-blue-300 font-semibold w-full">Detalhes</button>
		</div>
	)
}

export default Client;