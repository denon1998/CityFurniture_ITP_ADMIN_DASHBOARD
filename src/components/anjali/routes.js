import React from 'react';

const Dashboard = import('./views/dashboard/Dashboard');

const AddEmployee = import('./views/employee/AddEmployee');
const EmpDetails = import('./views/employee/EmpDetails');
const MonthlySalaryPaymentReport = import('./views/report/MonthlySalaryPaymentReport')
const ViewAEmp = import('./views/employee/ViewAEmployee')
const SalaryDetails = import('./views/salary/SalaryDetails')
const AddSalary = import('./views/salary/AddSalary')
const Attendence = import('./views/employee/Attendence')
const EditEmp = import('./views/employee/EditEmp')
const LeavedEmp = import('./views/employee/LeavedEmp')
const EditSalary = import('./views/salary/EditSalary')
const AttendenceHistory = import('./views/employee/AttendenceHistory')
const routes = [
  { path: '/empdetails', name: 'Theme', component: EmpDetails, exact: true },
  { path: '/monthlysalarypaymentreport', name: 'Theme', component: MonthlySalaryPaymentReport, exact: true },
  { path: '/ViewAEmp', name: 'Theme', component: ViewAEmp, exact: true },
  { path: '/salary-details', name: 'Theme', component: SalaryDetails, exact: true },
  { path: '/add-salary', name: 'Theme', component: AddSalary, exact: true },
  { path: '/attendence', name: 'Theme', component: Attendence, exact: true },
  { path: '/editemp/:id', name: 'Theme', component: EditEmp, exact: true },
  { path: '/edit-salary/:id', name: 'Theme', component: EditSalary, exact: true },
  { path: '/LeavedEmp', name: 'Theme', component: LeavedEmp, exact: true },
  { path: '/attendence-history', name: 'Theme', component: AttendenceHistory, exact: true },

];

export default routes;
