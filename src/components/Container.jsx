import Card from "./Card";

const Container = () => {
	return (
		<div className="h-full mt-20 w-full flex items-center justify-center flex-wrap">
			<Card icon="fa fa-check" title="Vender" description="Clique aqui para poder efectuar a venda dos produtos em stock." />
			<Card icon="fa fa-plus" title="Registrar" description="Clique aqui para poder registrar novos dos produtos em stock." />
			<Card icon="fa fa-search" title="Consultar" description="Clique aqui para poder consultar se o produto existência em stock." />
		</div>
	)
}

export default Container;