import {getUrlList,updateUrlData} from '../helpers/ServicesHelper'

function urlAction(repos) {
  return {type: "SET_EDIT_URL",payload:repos}
};

function urlActionUrl(repos) {
  return {type: "SET_URL",payload:repos}
};

export const setUrl =  (id) => async(dispatch) =>{
  var where = '/'+id;
  var response = await getUrlList(where);
	dispatch(urlActionUrl(response.data))
}

export const updateUrl =  (formdata,id='') => async(dispatch) =>{
  var response = await updateUrlData(formdata,id);
   if(response.status == 201 || response.status == 200){
    var response = await getUrlList();
    dispatch(urlActionUrl(response.data))
  }
}


const initialState = {urls: []}
const editUrl = (state = initialState, action) => {
	switch (action.type) {
  	case 'SET_EDIT_URL':
      return { urls: action.payload}; 
  }
  switch (action.type) {
    case 'SET_URL':
      return { urls: action.payload}; 
  }
  return state
}

export default editUrl;