import { ChangeEvent, FC, FormEvent, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransactionSchema } from "../schema/TransactionSchema";
import "./FormComponent.css";

interface FormComponentProps {
	onAddNewItem: (item: TransactionSchema) => void;
}

const FormComponent: FC<FormComponentProps> = (props) => {
	const { onAddNewItem } = props;

	const [title, setTitle] = useState<string>('');
	const [amount, setAmount] = useState<number>(0);
	const [formValid, setFormValid] = useState<boolean>(false);

	useEffect(() => {
		console.log("useEffect");
		const isValid: boolean = title.trim().length > 0 && amount !== 0;
		setFormValid(isValid);
	}, [title, amount]);

	const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const inputAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value));
	};
	const saveItem = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		console.log("number", amount);
		const itemData: TransactionSchema = {
			id: uuidv4(),
			title,
			amount: Number(amount),
		};
		onAddNewItem(itemData);
		setTitle("");
		setAmount(0);
	};

	return (
		<>
			<form onSubmit={saveItem}>
				<div className="form-control">
					<label>รายการ</label>
					<input
						type="text"
						placeholder="รายการ"
						onChange={inputTitle}
						value={title}
					/>
				</div>
				<div className="form-control">
					<label>จำนวนเงิน</label>
					<input
						type="number"
						placeholder="จำนวนเงิน"
						onChange={inputAmount}
						value={amount}
					/>
				</div>
				<div>
					<button disabled={!formValid} className="btn" type="submit">
						Add
					</button>
				</div>
			</form>
		</>
	);
};
export default FormComponent;
