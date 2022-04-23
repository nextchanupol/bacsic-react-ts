import React, { FC } from "react";
import { TransactionSchema } from "../schema/TransactionSchema";
import Item from "./Item";

import "./transaction.css";

interface TransactionProps {
	items: TransactionSchema[];
}

const Transaction: FC<TransactionProps> = (props) => {
	const { items } = props;
	return (
		<>
			<ul className="item-list">
				{items.map((item) => {
					return <Item {...item} key={item.id} />;
				})}
			</ul>
		</>
	);
};

export default Transaction;
