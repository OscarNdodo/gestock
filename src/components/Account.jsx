const Account = () => {
	return (
		<table className="w-8/12 flex flex-col items-center justify-start b-shadow px-2 my-2">
			<thead className="w-full">
				<tr className="w-full flex items-center justify-between py-4">
					<th className="text-gray-800">No.</th>
					<th className="text-gray-800">Produto</th>
					{/* <th className="text-gray-800">Quantidade</th> */}
					<th className="text-gray-800">Preço</th>
				</tr>
			</thead>
			<tbody className="w-full">

				<tr className="w-full flex items-center justify-between even:bg-blue-200 py-2">
					<td className="text-gray-700">01</td>
					<td className="text-gray-700">Manica Milho</td>
					{/* <td className="text-gray-700">3</td> */}
					<td className="text-gray-700">100 MZN</td>
				</tr>

			</tbody>
		</table>
	)
}

export default Account;