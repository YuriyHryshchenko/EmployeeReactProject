import './app-info.css';

const AppInfo = ({employeeCount, employeeCountOnIncrease}) => {
	return (
		<div className="app-info">
			<h1>Облік співробітників в компанії Yurii</h1>
			<h2>Загальна кількість співробітників: {employeeCount}</h2>
			<h2>Премію отримають: {employeeCountOnIncrease}</h2>
		</div>
	);	
}

export default AppInfo;