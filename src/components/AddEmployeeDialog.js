import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeeSlice';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

function AddEmployeeDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addEmployee({ name, position, department, directReports: [] }));
    setName('');
    setPosition('');
    setDepartment('');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Employee</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Employee</DialogTitle>
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
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddEmployeeDialog;
