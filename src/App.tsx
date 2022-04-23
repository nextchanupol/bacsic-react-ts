import React, { CSSProperties, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import FormComponent from "./components/FormComponent";
import Transaction from "./components/Transaction";
import { TransactionSchema } from "./schema/TransactionSchema";

function App() {
	const initData: TransactionSchema[] = [];
	const [items, setItems] = useState<TransactionSchema[]>(initData);

	const styles: { [key: string]: CSSProperties } = {
		h1: {
			textAlign: "center",
			color: "blue",
			fontSize: "1.5rem",
		},
	};

	const onAddNewItem = (item: TransactionSchema) => {
		console.log("onAddNewItem", item);
		setItems((prevItem: TransactionSchema[]) => {
			return [item, ...prevItem];
		});
	};

	return (
		<>
			<div className="container">
				<h1 style={styles.h1}>Basic React</h1>
				<FormComponent onAddNewItem={onAddNewItem} />
				<Transaction items={items} />
			</div>
		</>
	);
}

export default App;
