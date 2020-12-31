//全reducerをまとめるファイル
import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
//複数reducerがある場合
//export default combineReducer({ foo, bar, baz })