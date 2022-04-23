import React, { FC } from "react";
import "./Item.css";

interface ItemProps {
	id: string;
	title: string;
	amount: number;
}
const Item: FC<ItemProps> = (props) => {
	const { id, title, amount } = props;
	const status = amount < 0 ? "minus" : "plus";
	const symbol = amount < 0 ? "-" : "+";
	return (
		<>
			<li className={status} key={id}>
				{title}
				<span>
					{symbol}
					{Math.abs(amount)}
				</span>
			</li>
		</>
	);
};

export default Item;
