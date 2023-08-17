const Navegation = () => {
	return (
		<nav className="w-full flex flex-col items-center justify-center pt-2 bg-rose-300">
			<div>
				<h1 className="text-2xl text-white font-bold fa fa-beer"> LOGO</h1>
			</div>
			<form className="flex items-center justify-around sm:justify-center w-full bg-rose-400 mt-2 py-2">
				<label htmlFor="date" className="flex flex-col ">
					<input className="bg-rose-300 py-2 text-white font-bold rounded px-2" type="date" name="date" placeholder="data" id="date" />
				</label>
				<label htmlFor="fluxo">
					<select name="fluxo" id="fluxo" className="flex flex-col bg-rose-300 py-0 px-3 text-white font-bold rounded sm:mx-4">
						<option value="perdas">Tudo</option>
						<option value="saidas">Entradas</option>
						<option value="saidas">Saidas</option>
					</select>
				</label>
				<button className="fa fa-lg fa-search bg-white bg-full p-4 text-rose-400 rounded curosr:pointer hover:bg-gray-50 sm:py-5 sm:px-8"></button>
			</form>
		</nav>
	)
}

export default Navegation;