import NewTrans from "../Components/NewTrans";

const New = ({ addNewTransaction }) => {
	return (
		<section className="NewContainer">
			<h1>New Transaction</h1>
			<NewTrans addNewTransaction={addNewTransaction} />
		</section>
	);
};

export default New;
