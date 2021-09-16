import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Staff Dashboard',
    to: '/dashboard',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Add New Employee',
    to: '/addemp',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Mark Attendance',
    to: '/attendence',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Calculate Salary',
    to: '/add-salary',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'View',
    route: '/view',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Employee',
        to: '/ViewAEmp',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Employee',
        to: '/empdetails',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Salary Details',
        to: 'salary-details',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'History',
    route: '/history',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Attendence',
        to: '/attendence-history',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Leaved Employees',
        to: '/LeavedEmp',
      },
    ],
  },
  
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Report',
    to: '/monthlysalarypaymentreport',
  },
  
]

export default _nav
