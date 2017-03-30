import * as types from '../constants/ActionTypes';
import api from './api';

export function testAsyncStart() {
  return {
    type: types.TEST_ASYNC_ACTION_START
  };
}

export function testAsyncSuccess(data, id, source, keyword) {
  
  return {
    type: types.TEST_ASYNC_ACTION_SUCCESS,
    id,
    source,
    keyword,
    data
  }
}

export function testAsyncError(error) {
  return {
    type: types.TEST_ASYNC_ACTION_ERROR,
    error
  }
}

export function testAsync(id, source, keyword) {
  return function (dispatch) {
    
    dispatch(testAsyncStart());

    api.testAsync(id, source, keyword)
      .then(response => response.json())
      .then(response => dispatch(testAsyncSuccess(response, id, source, keyword)))
      .catch(error => dispatch(testAsyncError(error)));
  };
}