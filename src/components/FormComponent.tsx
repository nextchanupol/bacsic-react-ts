import { ChangeEvent, FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransactionSchema } from "../schema/TransactionSchema";
import "./FormComponent.css";

interface FormComponentProps {
	onAddNewItem: (item: TransactionSchema) => void;
}

const FormComponent: FC<FormComponentProps> = (props) => {
	const { onAddNewItem } = props;

	const [title, setTitle] = useState<string>("");
	const [amount, setAmount] = useState<number>(0);

	const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const inputAmount = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value));
	};
	const saveItem = (e: FormEvent<HTMLElement>) => {
		e.preventDefault();
		const itemData: TransactionSchema = {
			id: uuidv4(),
			title,
			amount,
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
					<input type="text" placeholder="รายการ" onChange={inputTitle} />
				</div>
				<div className="form-control">
					<label>จำนวนเงิน</label>
					<input type="number" placeholder="จำนวนเงิน" onChange={inputAmount} />
				</div>
				<div>
					<button className="btn" type="submit">
						Add
					</button>
				</div>
			</form>
		</>
	);
};
export default FormComponent;
