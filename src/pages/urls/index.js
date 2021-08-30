import React, { Component } from 'react'
import {Col,Image,Row,Tabs,Tab} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import List from '../components';
import EditUrl from '../components/editUrl';
const Urls =() => {
  return (
  	<Row className="container">
  		<Col lg={6}>
  			<EditUrl />
  		</Col>
  		<Col lg={6}>
  			<List />
  		</Col>
		</Row>	
  )
}

export default Urls;


