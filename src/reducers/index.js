//全reducerをまとめるファイル
import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
//複数reducerがある場合
//export default combineReducer({ foo, bar, baz })