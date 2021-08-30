import React, { useEffect,useState } from 'react'
import {Col,Image,Row,Tabs,Tab,Card,Form} from 'react-bootstrap';
import {Link,useParams,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import {setUrl,updateUrl}  from '../../reducers/editUrl';
const AddEditForm =  (props) => {
	const [title,setTitle] = useState('')
	const [url,setUrl] = useState('')
	const [errMessage,seterrMessage] = useState('')
	const [error,seterr] = useState(false)
	const [redirect,setRedirect] = useState(false)
	const {id} = useParams();
	useEffect(()=>{
		if(typeof id != 'undefined'){
			props.getEditUrls(id);
		}
	},[])

	useEffect(()=>{
		setTitle(props.urls.title)
		setUrl(props.urls.url)
	},[props.urls])

	const validateData = () => {
		var error = false;
		var message = '';
		if(url == ""){
			error = true
			message = 'Url cannot be empty'
		}else if(title == ""){
			error = true
			message = 'Title cannot be empty'
		}else if(validURL(url) == false){
			error = true
			message = 'Please enter valid url'
		}
		seterr(error)
		seterrMessage(message)
		return error;
	}

	const validURL = (str) => {
	  var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
	  return !!pattern.test(str);
	}

	const submitForm =(id) => {
		var formdata = {};
		if(validateData() == false){
			formdata['url'] = url;
			formdata['title'] = title;
			var id = (typeof id != 'undefined')?id:''
			props.updateEditUrls(formdata,id);
			setRedirect(true)
			return <Redirect to='/'  />
		}
	}

  return (
  	(redirect  == true) ?<Redirect to='/'  />:
		<div>
			<div className="card bg-light mb-2">
			  <div className="card-body text-center">
			  	<input type="text" className="mb-2" defaultValue={props.urls.title} onChange={(e)=>setTitle(e.target.value)}/>
			  	<input type="text" className="mb-2" defaultValue={props.urls.url} onChange={(e)=>setUrl(e.target.value)}/>
			  </div>
			  <div className="card-footer row">
			  	<div className="col-10">
			  	</div>
			  	<div className="pull-right col-2">	
			  		<button className="ml-10 pull-right" onClick={()=>submitForm(props.urls.id)}>Update</button>
			  	</div>	
			  </div>
			  {(error == true)&&<span className='red'>{errMessage}</span>}
			</div>
		</div>
  )
}

const mapStateToProps = (state) => {
  return {
    urls: state.editUrl.urls
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEditUrls: (id) => dispatch(setUrl(id)),
    updateEditUrls: (formdata,id) => dispatch(updateUrl(formdata,id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddEditForm);


