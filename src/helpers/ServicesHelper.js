import { axiosGet,axiosPost,axiosPatch,axiosDelete,axiosPUT } from './RequestsHelper.js';

export const getUrlList = async (where='') => {
	return await axiosGet(process.env.REACT_APP_API_END_POINT+'links'+where);
}

export const addUrl = async () => {
	return await axiosGet(process.env.REACT_APP_API_END_POINT);
}

export const updateUrl = async (id,formdata) => {
	return await axiosPatch(process.env.REACT_APP_API_END_POINT+'links/'+id,formdata);
}

export const updateUrlData = async (formdata,id) => {
	if(id != "")
		return await axiosPUT(process.env.REACT_APP_API_END_POINT+'links/'+id,formdata);
	else
		return await axiosPost(process.env.REACT_APP_API_END_POINT+'links/',formdata);
}

export const deleteUrl = async (id) => {
	return await axiosDelete(process.env.REACT_APP_API_END_POINT+'links/'+id);
}
