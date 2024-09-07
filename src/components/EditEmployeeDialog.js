import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../features/employees/employeeSlice';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function EditEmployeeDialog({ employee, onClose }) {
  const [name, setName] = useState(employee.name);
  const [position, setPosition] = useState(employee.position);
  const [department, setDepartment] = useState(employee.department);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(editEmployee({ id: employee.id, updatedEmployee: { name, position, department } }));
    onClose();
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Edit Employee</DialogTitle>
      <DialogContent>
        <TextField
          label="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          fullWidth
        />
        <TextField
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditEmployeeDialog;
