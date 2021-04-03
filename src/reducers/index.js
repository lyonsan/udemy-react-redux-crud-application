//全reducerをまとめるファイル
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
//複数reducerがある場合
//export default combineReducer({ foo, bar, baz })