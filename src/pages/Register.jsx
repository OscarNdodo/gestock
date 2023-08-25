const Register = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full mt-4">
			<h1 className="uppercase p-2 text-xl text-gray-800 my-3">Registar novo produto</h1>
			<form className="w-6/12 flex flex-col items-start justify-center p-2">
				<label className="text-gray-700 px-1">Nome</label>
				<input className="rounded text-md p-3 bg-white w-full border mb-4" type="text" required name="" placeholder="Qual é o nome do produto ?" />
				<label className="text-gray-700 px-1">Quantidade</label>
				<input className="rounded text-md p-3 bg-white w-full border mb-4" type="number" required name="" placeholder="Qual é a quantidade do produto ?" />
				<label className="text-gray-700 px-1">Preço de levamantamento</label>
				<input className="rounded text-md p-3 bg-white w-full border mb-4" type="number" required name="" placeholder="Qual foi o preço de levamantamento ?" />
				<label className="text-gray-700 px-1">Preço de venda</label>
				<input className="rounded text-md p-3 bg-white w-full border mb-4" type="number" required name="" placeholder="Qual será o preço de venda ?" />
				<div className="btns w-full flex">
					<button className="bg-green-400 text-white py-2 px-8 mt-4 mr-4 rounded">Registar</button>
					<button className="bg-blue-400 text-white py-2 px-5 mt-4 rounded">Actualizar</button>
				</div>
			</form>
		</div>
	)
}

export default Register;