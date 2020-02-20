import {EDIT_DATA_FAIL, EDIT_DATA_SUCCEESS} from './actionType';
import {EditDanhMuc} from '../../Api/Api';
export const editData = (token, name, color, id, type) => {
  return dispatch => {
    EditDanhMuc(token, name, color, id, type)
      .then(res => {
        console.log('Editactions', res);
        dispatch(editSuccees(id, res.category));
      })
      .catch(error => {
        dispatch(editFail(error));
      });
  };
};
const editSuccees = (id, category) => ({
  type: EDIT_DATA_SUCCEESS,
  payload: {
    id,
    category,
  },
});
const editFail = error => ({
  type: EDIT_DATA_FAIL,
  error,
});
