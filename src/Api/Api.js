const rootApi = 'https://my-finacy.herokuapp.com/api';
async function getListDanhMucChi(accessToken) {
  try {
    let response = await fetch(rootApi + '/v1/categories/expenses', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    });
    let responseJson = await response.json();
    //console.log(responseJson.result)
    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function addDanhMucThu_Chi(accessToken, category, nameCategory, color) {
  try {
    let type = category == 1 ? 'incomes' : 'expenses';
    // console.log(typeof category);
    // console.log(type);
    let response = await fetch(rootApi + '/v1/categories/' + type, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameCategory,
        color: color,
      }),
    });
    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function DeleteDanhMucChi(accessToken, idCategory) {
  try {
    let response = await fetch(
      rootApi + '/v1/categories/expenses/' + idCategory,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
      },
    );
    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
// Chinh sua danh muc
async function EditDanhMuc(
  accessToken,
  nameDanhMuc,
  maMau,
  idCategory,
  categoryType,
) {
  try {
    let type = categoryType === 1 ? 'incomes' : 'expenses';
    let response = await fetch(
      `${rootApi}/v1/categories/${type}/${idCategory}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + accessToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameDanhMuc, // loai danh muc
          color: maMau,
        }),
      },
    );
    let responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
export {getListDanhMucChi, addDanhMucThu_Chi, DeleteDanhMucChi, EditDanhMuc};
