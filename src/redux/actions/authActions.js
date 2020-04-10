import axios from 'axios';
/* import { baseUrl } from '../../utils/Utils';
import {  } from './types';

const loginSuccess = (data) => {
  return (
    {
      type: LOGIN,
      payload: data
    }
  );
};

export const loginAction = (dispatch, data) => async () => {
  return new Promise (( resolve, reject) => {
    const loginData = {
      "mobile": data.mobile,
      "password": data.password
    }
    dispatch({type:SET_LOADING_TRUE})
    axios.post(`${baseUrl}/user/login`, loginData)
    .then((res) => {
      dispatch({type:SET_LOADING_FALSE})
      resolve(res)
      dispatch(loginSuccess(res))
    })
    .catch((err) =>{
      dispatch({type:SET_LOADING_FALSE})
      reject(err)
      dispatch(loginSuccess(err.response))
    })
  })
}

export const logout = () =>{
  return {
    type : LOGOUT
  }
}
 */