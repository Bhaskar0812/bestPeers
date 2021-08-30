import axios from 'axios';

export const axiosGet = async (url) => {
  var response = await axios.get(url).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}

export const axiosPost = async (url,formdata) => {
  var response = await axios.post(url,formdata).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}

export const axiosPatch = async (url,formdata) => {
  var header = {
    'Content-Type':"application/json"
  }
  var response = await axios.patch(url,formdata,header).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}

export const axiosPUT = async (url,formdata) => {
  var header = {
    'Content-Type':"application/json"
  }
  var response = await axios.put(url,formdata,header).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}

export const axiosDelete = async (url) => {
  var response = await axios.delete(url).then(response => { 
    return response;
  })
  .catch(error => {
    return {data:{'status':'fail'}};
  });
  return response;
}
