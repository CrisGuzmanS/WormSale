import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList';

export default class FormNewEmployee extends Component {

    render(){
        return (
            <div className="card">
                {/* Form title */}
                <div className="card-header">
                    <h4 className="text-center">Add a employee</h4>
                </div>
                {/* Form */}
                <form id="product-form" className="card-body">
                    {/* Input First Name */}
                    <div className="form-group">
                        <label for="firstName">First name</label>
                        <input type="text" name="firstName" id="firstName" className="form-control" placeholder="Firt name"/>
                    </div>
                    {/* Input Last Name */}
                    <div className="form-group">
                        <label for="lastName">Last name</label>
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name"/>
                    </div>
                    {/* Input Age */}
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input type="number" name="age" id="age" className="form-control" placeholder="Age"/>
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="btn btn-primary btn-block mt-4">ADD</button>
                </form>
            </div>
        );
    }

}

if (document.getElementById('FormNewEmployee')) {
    ReactDOM.render(<FormNewEmployee />, document.getElementById('FormNewEmployee'));
}
