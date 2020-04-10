import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));

const AddEmployee = React.lazy(() => import('./views/Admin/AddEmployee/AddEmployee'));

const LeaveForm = React.lazy(() => import('./views/Employee/LeaveForm/LeaveForm'));

const LeaveDetails = React.lazy(() => import('./views/HR/LeaveDetails/LeaveDetails'));




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/addEmployee', name: 'Dashboard', component: AddEmployee },

  { path: '/leaveForm', name: 'Dashboard', component: LeaveForm },

  { path: '/leaveDetails', name: 'Dashboard', component: LeaveDetails },


];

export default routes;
