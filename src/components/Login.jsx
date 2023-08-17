const Login = () => {
	return (
		<form className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-blue-500 via-pink-400 to-purple-700">
			<i className="fa fa-2xl fa-user-astronaut mb-6 text-white"></i>
			<h1 className="uppercase text-white font-bold text-2xl mb-2">Bem-Vindo</h1>
			<div className="w-64 flex flex-col">
				<input className="focus:shadow-xl py-3 px-4 mb-5 text-md rounded" type="text" name="name" placeholder="Nome do usuário" />
				<input className="focus:shadow-xl py-3 px-4 mb-5 text-md rounded" type="password" name="password" placeholder="Senha do usuário" />
				<button className="bg-blue-400 text-white text-xl p-2 font-semibold rounded hover:bg-blue-500" type="submit">Login</button>
			</div>
		</form>
	)
}

export default Login;