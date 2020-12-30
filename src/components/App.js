import React, {Component} from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';


class App extends Component {
  render () {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = ({ increment, decrement })

//mapStateToPropsはstateからこのコンポーネントで必要なものを取り出してコンポーネント内にマッピングする機能をもつ関数
//mapDispatchToPropsはあるアクションが発生した時にreducerにタイプに応じた処理を実行させるための関数
export default connect(mapStateToProps, mapDispatchToProps)(App)

