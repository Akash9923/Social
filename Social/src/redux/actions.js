import Api from '../services/Api';

export const getusers = () => dispatch => {
  try {
    console.log('ddd');
    dispatch({type: 'LOADING'});
    Api.get('/users/all').then(response => {
      console.log(response.data);
      if (response.status == 200) {
        dispatch({type: 'GET_USER', payload: response.data});
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const getpost = data => dispatch => {
  try {
    console.log(data);
    dispatch({type: 'LOADING', payload: true});
    Api.get(`/posts/byuserId/${data}`).then(response => {
      console.log(response.data);
      if (response.status == 200) {
        dispatch({type: 'GET_POST', payload: response.data});
        dispatch({type: 'LOADING', payload: false});
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const createpost = data => dispatch => {
  try {
    dispatch({type: 'LOADING', payload: true});
    Api.post(`/posts`, {title: data.title, creadtedBy: data.creadtedBy}).then(
      response => {
        if (response.status == 201) {
         
          dispatch({type: 'UPDATE_POST', payload: response.data});
          dispatch({type: 'LOADING', payload: false});
           data.navigation.pop();
        }
      },
    );
  } catch (err) {
    console.log(err);
  }
};
export const getcomment = data => dispatch => {
  try {
    console.log(data);
    dispatch({type: 'LOADING', payload: true});
    Api.get(`/comments/bypostid/${data}`).then(response => {
      console.log(response.data);
      if (response.status == 200) {
        dispatch({type: 'GET_COMMENT', payload: response.data});
        dispatch({type: 'LOADING', payload: false});
      }
    });
  } catch (err) {
    console.log(err);
  }
};
export const createcomment = data => dispatch => {
  try {
    dispatch({type: 'LOADING', payload: true});
    Api.post(`/comments`, {content: data.content, postId: data.postId}).then(
      response => {
        if (response.status == 201) {
          dispatch({type: 'UPDATE_COMMENT', payload: response.data});
          dispatch({type: 'LOADING', payload: false});
        }
      },
    );
  } catch (err) {
    console.log(err);
  }
};
