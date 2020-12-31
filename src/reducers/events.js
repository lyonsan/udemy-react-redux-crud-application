import _ from 'lodash'
//actions/index.jsで決めたアクションのtypeに応じて行う処理を定義している
import { READ_EVENTS } from '../actions'


//stateは状態。関数内部で受け取ったアクションに応じて処理を返していく
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      //ハッシュの配列で取得したデータを、idをキーにして全体をハッシュにする
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}