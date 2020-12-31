import _ from 'lodash'
//actions/index.jsで決めたアクションのtypeに応じて行う処理を定義している
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from '../actions'


//stateは状態。関数内部で受け取ったアクションに応じて処理を返していく
//全てのイベント情報はeventsに格納されている
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      //ここで該当idのデータをAPIから受け取って、デフォルトでフォームに表示できるようにしていく
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      //ハッシュの配列で取得したデータを、idをキーにして全体をハッシュにする
      return _.mapKeys(action.response.data, 'id')
    //メモリ上からもdeteleメソッドで送信されたidを持つレコードを削除する必要がある
    case DELETE_EVENT:
      delete events[action.id]
      //更新後の情報を返してくれるメソッド
      return { ...events }
    default:
      return events
  }
}