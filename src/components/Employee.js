import React, { useState } from 'react'

const Employee = (props) => {

    const { deleteEmployee } = props;

    
    const [editFields, setEditFields] = useState(false);

    const [id,setId] = useState(props.employee.id);
    const [firstName,setFirstName] = useState(props.employee.firstName);
    const [lastName,setLastName] = useState(props.employee.lastName);
    const [department,setDepartment] = useState(props.employee.department);
    const [email,setEmail] = useState(props.employee.email);

    const update = () => {
        props.updateEmployee(id,department,firstName,lastName,email);
        setEditFields(false);
    }

  return (
    <tr>          
          <td>{id}</td>
          <td>
            {
                  !editFields ? department : <input type="text" value={department} onChange={ (e)=>setDepartment(e.target.value)} />
            }
          </td>
          
          
          <td>
            {
                !editFields ?  firstName  : <input type="text" value={firstName} onChange={ (e)=>setFirstName(e.target.value)} />
            }
        </td>
          <td>
            {
                !editFields ?  lastName  : <input type="text" value={lastName} onChange={ (e)=>setLastName(e.target.value)} />
            }
          </td> 
          <td>
            {
                !editFields ?  email  : <input type="text" value={email} onChange={ (e)=>setEmail(e.target.value)} />
            }
          </td> 
          <td>
              {!editFields ?
                  <button type="button" className='action-buttons btn btn-primary' onClick={() => setEditFields(true)}>Edit</button> : 
                  <button type="button" className='action-buttons btn btn-success' onClick={update}>Save</button>
                }
            
            <button type="button" className='action-buttons btn btn-danger' onClick={()=> deleteEmployee(id)}>Delete</button>
        </td>
    </tr>
  )
}

export default Employee