import React from "react";
import { useState, useEffect } from "react";

const Balance = ({ transactions }) => {
	// debugger;
	// const [balance, setBalance] = useState([]);

	// const accBalance = (transactions) => {
	let sum = 0;
	// 	let total = 0;
	// 	total = transactions.map((transaction) => {
	// 		sum += transaction.amount;
	// 		return sum;
	// 	});
	// 	setBalance(total);
	// };

	// useEffect(() => {
	// 	accBalance();
	// }, []);
	return (
		<>
			Account Balance:
			{transactions.map((transaction) => {
				return (sum += Number(transaction.amount));
			})}
		</>
	);
};
export default Balance;
