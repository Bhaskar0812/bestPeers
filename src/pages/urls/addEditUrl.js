import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import List from '../components';
import AddEditForm from '../components/addEditForm';
const AddEditUrl =() => {
  return (
  	<Row className="container">
  		<Col lg={6}>
  			<AddEditForm />
  		</Col>
		</Row>	
  )
}

export default AddEditUrl;


