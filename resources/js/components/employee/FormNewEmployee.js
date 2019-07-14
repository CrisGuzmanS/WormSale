import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Employee from '../../classes/Employee';
import EmployeesList from './EmployeesList';
import url from '../../config';

export default class FormNewEmployee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                firstName: '',
                lastName: '',
                age: '',
                area: '',
                gender: ''
            },
            employees: [],
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(new Employee(
            this.state.form.firstName,
            this.state.form.lastName,
            this.state.form.age,
            this.state.form.area,
            this.state.form.gender
        ));
    }

    async componentDidMount(){

        try {
            
            const response = await fetch(`${url}api/employee`);
            const employees = await response.json();

            this.setState({
                employees
            });

        } catch (error) {
            
        }

    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {/* Form title */}
                        <div className="card-header">
                            <h4 className="text-center">Add a employee</h4>
                        </div>
                        {/* Form */}
                        <form onSubmit={this.handleSubmit} id="product-form" className="card-body">
                            {/* Input First Name */}
                            <div className="form-group">
                                <label htmlFor="firstName">First name</label>
                                <input onChange={this.handleChange} type="text" name="firstName" id="firstName" className="form-control" placeholder="Firt name" />
                            </div>
                            {/* Input Last Name */}
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <input onChange={this.handleChange} type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" />
                            </div>
                            {/* Input Age */}
                            <div className="form-group">
                                <label htmlFor="age">Age</label>
                                <input onChange={this.handleChange} type="number" name="age" id="age" className="form-control" placeholder="Age" />
                            </div>
                            {/* Input Area */}
                            <div className="form-group">
                                <label htmlFor="area">Area</label>
                                <select onChange={this.handleChange} name="area" id="area" className="form-control">
                                    <option>None</option>
                                    <option>Management</option>
                                    <option>Administration</option>
                                    <option>Accounting</option>
                                    <option>Sales</option>
                                    <option>Systems</option>
                                </select>
                            </div>
                            {/* Input Gender */}
                            <div className="form-group">
                                <label>Gender</label><br></br>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} type="radio" name="gender" id="gender-male" value="M" className="form-check-input" />
                                    <label htmlFor="gender-male" className="form-check-label">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={this.handleChange} type="radio" name="gender" id="gender-female" value="F" className="form-check-input" />
                                    <label htmlFor="gender-female" className="form-check-label">Female</label>
                                </div>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mt-4">ADD</button>
                        </form>
                    </div>
                    <EmployeesList employees={this.state.employees} />
                </div>
            </div>
        );
    }

}

if (document.getElementById('FormNewEmployee')) {
    ReactDOM.render(<FormNewEmployee />, document.getElementById('FormNewEmployee'));
}
