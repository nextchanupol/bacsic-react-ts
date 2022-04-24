import { CSSProperties, useEffect, useReducer, useState } from "react";

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

	// const [showSummation, setShowSummation] = useState<boolean>(false);

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

	// TODO: useReducer here
	enum ShowSummationActionKind {
		SHOW = "SHOW",
		HIDE = "HIDE",
	}
	interface ShowSummationAction {
		type: ShowSummationActionKind;
		// payload: boolean;
	}
	type ShowSummationState = {
		isShow: boolean;
	};

	const reducer = (state: ShowSummationState, action: ShowSummationAction) => {
		switch (action.type) {
			case ShowSummationActionKind.SHOW:
				// return {
				// 	...state,
				// 	value: true,
				// };
				// return setShowSummation(true);
				return { isShow: true };
			case ShowSummationActionKind.HIDE:
				// return {
				// 	...state,
				// 	value: false,
				// };
				// return setShowSummation(false);
				return { isShow: false };
			default:
				return state;
		}
	};

	const initIsShowState: ShowSummationState = {
		isShow: false,
	};
	const [showSummation, dispatch] = useReducer(reducer, initIsShowState);

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
					Current State With useReducer : {showSummation.isShow.toString()}
					{showSummation.isShow && <Summation />}
					<FormComponent onAddNewItem={onAddNewItem} />
					<Transaction items={items} />
					<button
						onClick={() => {
							// dispatch({ type: ShowSummationActionKind.SHOW, payload: true });
							dispatch({ type: ShowSummationActionKind.SHOW });
						}}
					>
						แสดง
					</button>
					<button
						onClick={() => {
							// dispatch({ type: ShowSummationActionKind.HIDE, payload: false });
							dispatch({ type: ShowSummationActionKind.HIDE });
						}}
					>
						ซ่อน
					</button>
				</div>
			</DataContext.Provider>
		</>
	);
}

export default App;
