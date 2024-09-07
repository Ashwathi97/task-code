import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/employees';

// Fetch employee data
export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Add new employee
export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
});

// Edit employee details
export const editEmployee = createAsyncThunk('employees/editEmployee', async ({ id, updatedEmployee }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedEmployee);
  return response.data;
});

// Delete employee
export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        const index = state.employees.findIndex(emp => emp.id === action.payload.id);
        state.employees[index] = action.payload;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
      });
  },
});

export default employeeSlice.reducer;
