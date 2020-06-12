import firebase from '../firebase';

export function getData() {
  return dispatch => {
    firebase
      .database()
      .ref('/blogs')
      .on('value', snapshot => {
        dispatch({
          type: 'GET_DATA',
          payload: snapshot.val(),
        });
      });
  };
}

export function postData(nocontainer, size, type, slot, row, tier) {
  return dispatch => {
    firebase
      .database()
      .ref('/blogs')
      .push({nocontainer, size, type, slot, row, tier});
  };
}

export function deleteData(key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/blogs/${key}`)
      .remove();
  };
}

export function editData(nocontainer, size, type, slot, row, tier, key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/blogs`)
      .child(key)
      .update({nocontainer, size, type, slot, row, tier});
  };
}
