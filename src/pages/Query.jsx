const Query = () => {
	return (
		<div className="flex flex-col items-center">
			<form className="w-4/12 b-shadow py-2 m-4">
				<input className="w-10/12 px-2" type="search" name="" id="" placeholder="Consulte pelo nome do produto" />
				<button className="w-2/12  text-center fa fa-md fa-search"></button>
			</form>
			<ol className="w-full flex flex-col items-center justify-center py-4 px-2">
				<li className="w-full flex items-center justify-around"><span>Nome</span><span>Quantidade</span><span>Preço</span></li>
				<li className="w-full flex items-center justify-around text-gray-600 py-1 even:bg-blue-100"><span>Coca-cola</span><span>34</span><span>20 MZN</span></li>
				<li className="w-full flex items-center justify-around text-gray-600 py-1 even:bg-blue-100"><span>Coca-cola</span><span>34</span><span>20 MZN</span></li>
				<li className="w-full flex items-center justify-around text-gray-600 py-1 even:bg-blue-100"><span>Coca-cola</span><span>34</span><span>20 MZN</span></li>
			</ol>
		</div>
	)
}

export default Query;