import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Transaction = ({ transaction, index }) => {
	const [toggleColor, setToggleColor] = useState("");

	const changeClass = () => {
		transaction.amount > 0
			? setToggleColor("positive")
			: setToggleColor("negative");
	};

	useEffect(() => {
		changeClass();
	}, [transaction.amount]);

	return (
		<tr>
			{/* <td>{transaction.from}</td> */}
			<td>{transaction.date}</td>
			<td>
				<Link to={`/transactions/${index}`}>{transaction.name}</Link>
			</td>
			<td className={toggleColor}>{transaction.amount}</td>
		</tr>
	);
};

export default Transaction;
