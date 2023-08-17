const NewProduct = () => {
	return (
		<form className="w-8/12 flex items-center justify-around py-4 b-shadow rounded-md mt-4">
			<select name="product" className="bg-white px-2 text-gray-500 rounded">
				<option value="null">Selecione o produto</option>
				<option value="null">Product 1</option>
				<option value="null">Product 2</option>
				<option value="null">Product 3</option>
				<option value="null">Product 4</option>
			</select>
			<select name="portion" className="bg-white px-2 text-gray-400 rounded">
				<option value="null">Selecione a porção</option>
				<option value="null">Product 1</option>
				<option value="null">Product 2</option>
				<option value="null">Product 3</option>
				<option value="null">Product 4</option>
			</select>
			<select name="quantify" className="bg-white px-2 text-gray-400 rounded">
				<option value="null">Selecione quantidade</option>
				<option value="null">Product 1</option>
				<option value="null">Product 2</option>
				<option value="null">Product 3</option>
				<option value="null">Product 4</option>
			</select>
			<button className="w-32 py-2 bg-green-500 text-white rounded hover:bg-green-400">Adicionar</button>
		</form>
	)
}

export default NewProduct;