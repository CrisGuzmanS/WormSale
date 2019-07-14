import React from 'react';

const EmployeesList = ({ employees }) => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>AGE</th>
                <th>AREA</th>
                <th>GENDER</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.age}</td>
                    <td>{employee.area}</td>
                    <td>{employee.gender}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default EmployeesList;