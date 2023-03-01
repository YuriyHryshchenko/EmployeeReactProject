import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary:800, increase: false, rise: true, id:1},
				{name: 'Carl W.', salary:3000, icrease: false, rise: false, id:2},
				{name: 'Yurii H.', salary:5000, increase: true, rise: false, id:3},
			],
			term: '',
			filter: 'all'
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({
				data: data.filter(item => item.id !== id)
		}))
	}

	addItem = (name,salary) => {
		const obj = {
			name: name,
			salary: salary, 
			increase: false,
			rise: false,
			id: this.maxId++
		}
		
		this.setState(({data}) => {
			const newData = [...data, obj]
			return {
				data: newData
			}
		})
	}

	onToggleProp = (id, prop) => {
		// this.setState(({data}) => {
		// 	const index = data.findIndex(elem => elem.id === id);

		// 	const old = data[index];
		// 	const newItem = {...old, increase: !old.increase}

		// 	const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

		// 	return {
		// 		data: newArr
		// 	}
		// })

		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))
	}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			return item.name.indexOf(term) > -1
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterPost = (data, filter) => {
		switch (filter) {
			case 'rise': 
				return data.filter(item => item.rise);
			case 'moreThan1000':
				return data.filter(item => item.salary > 1000);
			default: 
				return data;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter});
	}

	onSalaryEdit = (id, salary) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, salary: salary}
				}
				return item;
			})
		}))
	}

	render() {
		const {data, term, filter} = this.state;
		const visibleData = this.filterPost(this.searchEmp(data,term), filter);
		return (
			<div className="app">
				<AppInfo employeeCount={data.length}
							employeeCountOnIncrease={data.filter(item => item.increase).length}/>
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch}/>
					<AppFilter filter={filter}
								  onFilterSelect={this.onFilterSelect}/>
				</div>
				<EmployeesList data={visibleData} 
									onDelete={this.deleteItem}
									onToggleProp={this.onToggleProp}
									onSalaryEdit={this.onSalaryEdit}
									/>
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;