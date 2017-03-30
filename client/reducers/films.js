import { TEST_ASYNC_ACTION_START, TEST_ASYNC_ACTION_ERROR, TEST_ASYNC_ACTION_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  keyword: '',
  id: '1',
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  galleryData: null
};

export default function films(state = initialState, action) {
  switch (action.type) {
  
  case TEST_ASYNC_ACTION_START:
    return Object.assign({}, state, {
      asyncLoading: true,
      asyncError: null
    });
  
  case TEST_ASYNC_ACTION_ERROR:
    return Object.assign({}, state, {
      asyncLoading: false,
      asyncError: action.data
    });
  
  case TEST_ASYNC_ACTION_SUCCESS:
    
    if (action.source === 1 || action.source === 2) {
      return Object.assign({}, state, {
        asyncLoading: false,
        asyncData: action.data,
        id: action.id,
        keyword: action.keyword
      })
    }
    return Object.assign({}, state, {
      asyncLoading: false,
      galleryData: action.data
    
    })

  default:
    return state;
  }
}
