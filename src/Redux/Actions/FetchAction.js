import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCEESS,
  FETCH_DATA_FAIL,
} from './actionType';
import axios from 'axios';

import {getListDanhMucChi} from '../../Api/Api';
export const fetchData = token => {
  console.log(token);
  return dispatch => {
    dispatch(fetchDataStart());
    //XU LY API
    getListDanhMucChi(token)
      .then(res => {
        console.log('TestRes', res.categories);
        dispatch(fetchDataSucceess(res.categories));
      })
      .catch(err => {
        alert('Loi');
        dispatch(fetchDataFail(err));
      });
  };
};
const fetchDataStart = () => ({
  type: FETCH_DATA_START,
});
const fetchDataSucceess = newData => ({
  type: FETCH_DATA_SUCCEESS,
  payload: newData,
});
const fetchDataFail = error => ({
  type: FETCH_DATA_FAIL,
  error,
});
