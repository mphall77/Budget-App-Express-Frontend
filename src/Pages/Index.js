import React from "react";
import Transactions from "../Components/Transactions";

const Index = ({ transactions }) => {
	return (
		<div className="Index">
			<h1>Transactions</h1>
			<Transactions transactions={transactions} />
		</div>
	);
};

export default Index;
