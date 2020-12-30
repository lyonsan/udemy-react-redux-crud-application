//actions/index.jsで決めたアクションのtypeに応じて行う処理を定義している
import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

//stateは状態。関数内部で受け取ったアクションに応じて処理を返していく
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 }
    case DECREMENT:
      return { value: state.value - 1 }
    default:
      return state
  }
}