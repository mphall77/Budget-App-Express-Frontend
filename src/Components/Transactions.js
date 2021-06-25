import React from "react";
import Transaction from "./Transaction";
import Balance from "./Balance";

const Transactions = ({ transactions }) => {
	return (
		<section className="Transactions">
			<h1>Transactions</h1>
			<Balance transactions={transactions} />
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
