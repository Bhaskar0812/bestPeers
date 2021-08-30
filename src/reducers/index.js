import { combineReducers } from 'redux'
import urls from './urls.js';
import editUrl from './editUrl.js';

export default combineReducers({
  urls,
  editUrl
})