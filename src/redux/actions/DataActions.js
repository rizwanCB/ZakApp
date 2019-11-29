import {FETCH_IN_PROGRESS, USERS} from '../types.js';
import getAllOrders from '../../services';
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

export const getOrders = () => {
  return dispatch => {
    dispatch(loadingControl('true'));

    // const endPoint = 'sells?time=today&status=LATER&shipper=ALL&package=ALL';
    const endPoint = 'sells?time=yesterday&status=ALL&shipper=ALL&package=ALL';
    getAllOrders(endPoint, '', 'get')
      .then(result => {
        console.warn(result.data.transaction);
        dispatch(setFetchedUsers(result.data.transaction));
        dispatch(loadingControl('false'));
      })
      .catch(err => {
        Alert.alert(err.message);
        dispatch(loadingControl('false'));
      });
    //   do a long time consuming call like API CALLS here
  };
};
