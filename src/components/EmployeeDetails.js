import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeeSlice';
import EditEmployeeDialog from './EditEmployeeDialog';
import './EmployeeDetails.css';

function EmployeeDetails({ employee }) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteEmployee(employee.id));
  };

  return (
    <div className="employee-details">
      <span>{employee.name} - {employee.position} ({employee.department})</span>
      <button onClick={() => setEditDialogOpen(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {editDialogOpen && (
        <EditEmployeeDialog employee={employee} onClose={() => setEditDialogOpen(false)} />
      )}
    </div>
  );
}

export default EmployeeDetails;
