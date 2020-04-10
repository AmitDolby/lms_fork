import React, { Component } from 'react'
import { Card, CardBody, Button, CardHeader, Col, Row, Collapse } from 'reactstrap';
//import { getDashBoardAction } from '../../redux/actions/dashboardAction';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className="animated fadeIn">
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
