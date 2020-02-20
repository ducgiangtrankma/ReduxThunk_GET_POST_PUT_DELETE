import {ADD_DATA_FAIL, ADD_DATA_SUCCEESS} from './actionType';
import {addDanhMucThu_Chi} from '../../Api/Api';
export const addData = (accessToken, category, nameCategory, color) => {
  return dispatch => {
    addDanhMucThu_Chi(accessToken, category, nameCategory, color)
      .then(res => {
        console.log('Danh Muc add', res.category);
        dispatch(addDataSucceess(res.category));
      })
      .catch(error => {
        alert('Loi');
        dispatch(addDataFail(error));
      });
  };
};
const addDataSucceess = newData => ({
  type: ADD_DATA_SUCCEESS,
  payload: newData,
});
const addDataFail = error => ({
  type: ADD_DATA_FAIL,
  error,
});
