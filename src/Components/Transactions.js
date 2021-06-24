import React from "react";
import Transaction from "./Transaction";
// import { useState, useEffect } from "react";

const Transactions = ({ transactions }) => {
	// const [balance, setBalance] = useState([])

	// const accBalance = ({transactions}) => {
	// 	let sum = 0;
	// 	let total = 0;
	// 	debugger
	// 	 total =
	// 		transactions.map(transaction => {
	// 			sum += transaction.amount;
	// 			return (sum);
	// 		})
	// 	setBalance(total);
	// }

	// useEffect(() => {
	// 	accBalance();
	// }, []);

	return (
		<section className="Transactions">
			<h1>Transactions</h1>
			<div className="Balance">Account Balance: </div>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Purchase</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, index) => {
						return (
							<Transaction
								transaction={transaction}
								index={index}
								key={index}
							/>
						);
					})}
				</tbody>
			</table>
		</section>
	);
};

export default Transactions;
