import React from "react";

const Balance = ({ transactions }) => {
	let sum = 0;
	let total = 0;

	return (
		<section className="Balance">
			{transactions.map((transaction) => {
				sum += transaction.amount;
				total = sum;
			})}
			Account Balance: ${total}
		</section>
	);
};
export default Balance;
