import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Employee from './Employee';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    const getEmployees = ()=>{
        fetch('http://localhost:8080/get-employees')
            .then(response => response.json())
            .then(employees => setEmployees(employees))
    }

    const deleteEmployee = (id) => {
        console.log(id);
        fetch("http://localhost:8080/delete-employee?id=" + id,
            {
                method: 'DELETE',
            }
        )
            .then(() => {
                setEmployees(employees.filter(e => e.id !== id));
            })
    }

    const updateEmployee = (id,department,firstName,lastName,email) => {
        fetch("http://localhost:8080/update-employee",
            {
                method: 'PUT',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    id,department,firstName,lastName,email
                })
            }
        )
            .then((response) => {
                console.log(response);
            })
    }

    const addEmployee = () => {
        const department = prompt("Enter department");
        const firstName = prompt("Enter first name");
        const lastName = prompt("Enter last name");
        const email = prompt("Enter email");

        fetch("http://localhost:8080/add-employee",
            {
                method: "POST", 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    department,firstName,lastName,email
                })
            }
        ).then(() => window.location.reload())
    }

    useEffect(()=>{
        getEmployees();
    },[])

  return (
    <div>
          <span style={{fontSize : "20px"}}>Employee List</span>
          <button type="button" className='add-button btn btn-success' onClick={addEmployee}>Add</button>
          <table className="employee-table">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Department</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                </tr>
              </thead>
            <tbody>
                {employees.map(
                    (employee) => <Employee key={employee.id} employee={employee} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee} />
                )}
            </tbody>
            
        </table>
    </div>
  )
}

export default EmployeeList