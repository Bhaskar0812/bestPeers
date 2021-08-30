import {getUrlList,updateUrl,deleteUrl} from '../helpers/ServicesHelper'

function urlAction(repos) {
  return {type: "SET_URL",payload:repos}
};

export const setUrl =  (data) => async(dispatch) =>{
  var response = await getUrlList();
	dispatch(urlAction(response.data))
}

export const deleteData =  (id) => async(dispatch) =>{
  var response = await deleteUrl(id);
  if(response.status == 200){
    var response = await getUrlList();
    dispatch(urlAction(response.data))
  }
}

export const updateUrlData =  (id,formdata) => async(dispatch) =>{
  var response = await updateUrl(id,formdata);
  if(response.status == 200){
    var response = await getUrlList();
    dispatch(urlAction(response.data))
  }
}

const initialState = {urls: []}
const urls = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_URL':
      return { urls: action.payload}; 
  }
  return state
}

export default urls;