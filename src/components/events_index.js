import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { readEvents } from '../actions';


class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          {/* 詳細ページにリンクを飛ばすようにする。このURLで表示されるのはEventsShowコンポーネント */}
          <Link to={`/events/${event.id}`} >
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render () {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        {/* 新規作成ボタンを作っている。ContentAddで＋の文字、styleで表示の位置を変更している */}
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
            //既存の属性をセットしてチェックボックスを表示させなくする
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>

        
      </React.Fragment>
        
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
const mapDispatchToProps = ({ readEvents })

//mapStateToPropsはstateからこのコンポーネントで必要なものを取り出してコンポーネント内にマッピングする機能をもつ関数
//mapDispatchToPropsはあるアクションが発生した時にreducerにタイプに応じた処理を実行させるための関数
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

