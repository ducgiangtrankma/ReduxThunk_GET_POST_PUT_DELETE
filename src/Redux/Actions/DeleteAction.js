import {DELETE_DATA_FAIL, DELETE_DATA_SUCCEESS} from './actionType';
import {DeleteDanhMucChi} from '../../Api/Api';
export const deleteData = (token, id) => {
  return dispatch => {
    DeleteDanhMucChi(token, id)
      .then(res => {
        console.log('Delete Res', res);
        dispatch(deleteDataSucceess(id));
      })
      .catch(error => {
        dispatch(deleteDataFail(error));
      });
  };
};
const deleteDataFail = error => ({
  type: DELETE_DATA_FAIL,
  error,
});
const deleteDataSucceess = id => ({
  type: DELETE_DATA_SUCCEESS,
  payload: id,
});
