import { Component } from 'react';
import './employee-list-item.css';

class EmployeesListItem extends Component {
	constructor (props) {
		super(props);
		this.state = {
			salary: `${this.props.salary}$`
		}
	}
	onSalaryEdit = (e) => {
		const salary = e.target.value;
		this.setState({salary});
		this.props.onSalaryEdit(this.props.id, salary);
	}

	render() {
		const {name, onDelete, onToggleProp, increase, rise} = this.props;
		const {salary} = this.state;
		return (
			<li className={"list-group-item d-flex justify-content-between" + 
								(increase ? " increase" : "") + 
								(rise ? " like" : "")}>
				<span onClick={onToggleProp} className="list-group-item-label" data-toggle="rise">{name}</span>
				<input type="text" className="list-group-item-input" 
						 value={salary}
						 onChange={this.onSalaryEdit}/>
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle="increase">
						<i className="fas fa-cookie"></i>
						</button>
					<button type="button"
								className="btn-trash btn-sm " onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;