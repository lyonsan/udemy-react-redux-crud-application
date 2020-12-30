import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    //ここでやりたいのは状態を変えることと、それに関連するDOMを再描画すること
    //setStateを実行するとrenderが実行される
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () =>{
    this.setState({count: this.state.count - 1})
  }

  render () {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        {/* それぞれのイベントが起こったときのアクションをメソッド化して処理している */}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


export default App;
