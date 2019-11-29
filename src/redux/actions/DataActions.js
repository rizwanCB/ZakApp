import {FETCH_IN_PROGRESS, USERS, ALBUMS} from '../types.js';
import getAllUsers from '../../services';
import getAllAlbums from '../../services';

import {Alert} from 'react-native';

export const loadingControl = text => {
  return {
    type: FETCH_IN_PROGRESS,
    payLoad: text,
  };
};
export const setFetchedUsers = users => {
  return {
    type: USERS,
    payLoad: users,
  };
};
export const setFetchedAlbums = albums => {
  return {
    type: ALBUMS,
    payLoad: albums,
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch(loadingControl('true'));
    const endPoint = 'users';
    getAllUsers(endPoint, '', 'get')
      .then(result => {
        dispatch(setFetchedUsers(result.data));
        dispatch(loadingControl('false'));
      })
      .catch(err => {
        Alert.alert(err.message);
        dispatch(loadingControl('false'));
      });
    //   do a long time consuming call like API CALLS here
  };
};
export const getAlbums = id => {
  return dispatch => {
    dispatch(loadingControl('true'));
    const endPoint = `albums?userId=${id}`;
    getAllAlbums(endPoint, '', 'get')
      .then(result => {
        dispatch(setFetchedAlbums(result.data));
        dispatch(loadingControl('false'));
      })
      .catch(err => {
        Alert.alert(err.message);
        dispatch(loadingControl('false'));
      });
    //   do a long time consuming call like API CALLS here
  };
};
