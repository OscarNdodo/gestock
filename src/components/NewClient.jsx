const NewClient = ({ event, button }) => {
	return (
		<form className="w-96 flex bg-white b-shadow p-4 rounded-lg mt-8">
			<input onChange={event} className="w-10/12" type="text" name="client" placeholder="Nome do cliente" />
			<button onClick={button} className="w-2/12 text-blue-500 text-center font-bold hover:text-blue-300">OK</button>
		</form>
	)
}

export default NewClient;