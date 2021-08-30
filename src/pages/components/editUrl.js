import React, { useEffect,useState } from 'react'
import {Col,Image,Row,Tabs,Tab,Card,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {setUrl,deleteData}  from '../../reducers/urls';
const EditUrl =  (props) => {
	const [urls,setUrls] = useState([])
	useEffect(()=>{
		setUrls(props.urls)
	},[props.urls])

  return (
  	<React.Fragment>
	  	{
	  		urls.length > 0 ?
		  		urls.map((url,index)=>(
						<div key={index}>
							<div className="card bg-light mb-2">
							  <div className="card-body text-center">
							  	<input type="text" className="mb-2" readOnly value={url.title}/>
							  	<input type="text" className="mb-2" readOnly value={url.url}/>
							  </div>
							  <div className="card-footer row">
							  	<div className="col-10">
							  		<Link to={'/add-edit-url/'+url.id} className="mr-10">Edit</Link>
							  	</div>
							  	<div className="pull-right col-2">	
							  		<button className="ml-10 pull-right" onClick={()=>props.deleteUrl(url.id)}>Delete</button>
							  	</div>	
							  </div>
							</div>
						</div>
					))
				:
				<div>
					<div className="card">
					  <div className="card-body">
					   	No Links Available
					  </div>
					</div>
				</div>
			}
		<Link to={'/add-edit-url'} className='btn btn-primary justify-content-center'>Add new url</Link>	
		</React.Fragment>			
  )
}

const mapStateToProps = (state) => {
  return {
    urls: state.urls.urls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUrls: () => dispatch(setUrl()),
    deleteUrl: (id) => dispatch(deleteData(id)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EditUrl);


