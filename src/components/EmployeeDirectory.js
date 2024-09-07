import React from 'react';
import { useSelector } from 'react-redux';
import EmployeeDetails from './EmployeeDetails';
import AddEmployeeDialog from './AddEmployeeDialog';

function EmployeeDirectory() {
  const employees = useSelector((state) => state.employees.employees);

  const renderEmployeeTree = (employees) => {
    return employees.map((employee) => (
      <li key={employee.id}>
        <EmployeeDetails employee={employee} />
        {employee.directReports && employee.directReports.length > 0 && (
          <ul>{renderEmployeeTree(employee.directReports)}</ul>
        )}
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderEmployeeTree(employees)}</ul>
      <AddEmployeeDialog />
    </div>
  );
}

export default EmployeeDirectory;
