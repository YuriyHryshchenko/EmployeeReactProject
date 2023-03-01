import EmployeesListItem from "../employee-list-item/employee-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onSalaryEdit}) => {
	const elements = data.map(item => {
		const {id, salary,  ...itemProps} = item;
		return (
			<EmployeesListItem key={id} id={id} salary={salary} {...itemProps} 
									 onDelete={() => onDelete(id)}
									 onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
									 onSalaryEdit={onSalaryEdit}
									 />
		);
	});
	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;