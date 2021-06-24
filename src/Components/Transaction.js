import { Link } from "react-router-dom";

const Transaction = ({ transaction, index }) => {
	return (
		<tr>
			{/* <td>{transaction.from}</td> */}
			<td>{transaction.date}</td>
			<Link to={`/transactions/${index}`}>{transaction.name}</Link>
			<td>{transaction.amount}</td>
		</tr>
	);
};

export default Transaction;
