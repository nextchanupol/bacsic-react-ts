import React, { CSSProperties, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import DataContext from "./context/DataContext";
import FormComponent from "./components/FormComponent";
import Transaction from "./components/Transaction";
import { TransactionSchema } from "./schema/TransactionSchema";
import Summation from "./components/Summation";

function App() {
	const initData: TransactionSchema[] = [];
	const [items, setItems] = useState<TransactionSchema[]>(initData);

	const [income, setIncome] = useState<number>(0);
	const [expense, setExpense] = useState<number>(0);

	useEffect(() => {
		const amounts = items.map((item) => item.amount);
		const income = amounts
			.filter((x) => x > 0)
			.reduce((total: number, curr: number) => (total += curr), 0);
		setIncome(income);

		const exp = amounts
			.filter((x) => x < 0)
			.reduce((total: number, curr: number) => (total += curr), 0);
		setExpense(-1 * exp);
	}, [items, income, expense]);

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
			<DataContext.Provider
				value={{
					income: income,
					expense: expense,
				}}
			>
				<div className="container">
					<h1 style={styles.h1}>Basic React</h1>

					<Summation />
					<FormComponent onAddNewItem={onAddNewItem} />
					<Transaction items={items} />
				</div>
			</DataContext.Provider>
		</>
	);
}

export default App;
