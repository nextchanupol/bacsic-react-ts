import React, { CSSProperties, FC, useContext } from "react";
import DataContext from "../context/DataContext";

const Summation: FC = () => {
	const { income, expense } = useContext(DataContext);

	const styles: { [key: string]: CSSProperties } = {
		minus: {
			borderRight: "5px solid salmon",
		},
		plus: {
			borderRight: "5px solid #2ccc71",
		},
		rptContainer: {
			display: "flex",
			justifyContent: "space-between",
			backgroundColor: "#fff",
		},
		rptContainerDiv: {
			flex: "1",
			textAlign: "center",
			borderRight: "1px solid #dedede",
			padding: '30px',
		},
		rptInc: {
			fontSize: "20px",
			letterSpacing: "1px",
			justifyContent: "space-between",
			margin: "5px 0",
			color: '#2ccc71',
		},
		rptExp: {
			fontSize: "20px",
			letterSpacing: "1px",
			justifyContent: "space-between",
			margin: "5px 0",
			color: 'salmon',
		},
	};
	return (
		<>
			<h3>รายละเอียด (income-expense)</h3>
			<h4>{income - expense}</h4>
			<div style={styles.rptContainer}>
				<div style={styles.rptContainerDiv}>
					<h4>Income</h4>
					<p style={styles.rptInc}>{income}</p>
				</div>
				<div style={styles.rptContainerDiv}>
					<h4>Expense</h4>
					<p style={styles.rptExp}>{expense}</p>
				</div>
			</div>
		</>
	);
};

export default Summation;
