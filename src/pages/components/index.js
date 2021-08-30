import React, { useEffect,useState } from 'react'
import {Col,Image,Row,Tabs,Tab,Card,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {setUrl,updateUrlData}  from '../../reducers/urls';
const UrlList =  (props) => {
	const [urls,setUrls] = useState([])

	useEffect(()=>{
		props.getUrls();
	},[])

	const clickAction = (id,clicks,url) => {
		var clicks = clicks+1;
		var formdata = {clicks:clicks++}
		props.updateUrl(id,formdata)
		window.open(url, '_blank');
	}

  return (
  	props.urls.length > 0 ?
  		props.urls.map((url,index)=>(
				<div key={index}>
					<div className="card bg-light mb-2">
					  <div className="card-body text-center">
					    <a onClick={()=>clickAction(url.id,url.clicks,url.url)} href="#" className="text-center">{url.title}</a>
					    <span> - ({(typeof url.clicks != "undefined")?(url.clicks == null)?1:url.clicks:0})</span>
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
    updateUrl: (id,formdata) => dispatch(updateUrlData(id,formdata)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UrlList);


