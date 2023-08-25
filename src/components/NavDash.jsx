const NavDash = ({ clickedItem }) => {
	return (
		<nav className=" sm:w-full py-4 sm:px-16 bg-gradient-to-r from-blue-500 to-rose-500 flex items-center justify-between">
			<h1><i className="fa fa-2xl pr-2 fa-beer text-blue-0 bg-opacity-90 text-white"></i><span className="text-white text-lg font-bold">Marca inc.</span></h1>
			<ul className="w-6/12 flex items-center justify-between py-2">
				<li onClick={clickedItem} className="uppercase text-sm text-center pt-2 bg-white text-rose-400 px-6 mx-2 cursor-pointer rounded hover:opacity-90">Vender</li>
				<li onClick={clickedItem} className="uppercase text-sm text-center pt-2 bg-white text-rose-400 px-6 mx-2 cursor-pointer rounded hover:opacity-90">Registrar</li>
				<li onClick={clickedItem} className="uppercase text-sm text-center pt-2 bg-white text-rose-400 px-6 mx-2 cursor-pointer rounded hover:opacity-90">Consultar</li>
				<li onClick={clickedItem} className="uppercase text-sm text-center pt-2 bg-blue-400 text-white px-6 mx-2 cursor-pointer rounded hover:opacity-90">Sair</li>
			</ul>
		</nav>
	)
}

export default NavDash;