import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
//ここでは行うHTTP通信に基づいたeventを設定しておくputは更新するメソッド
import { getEvent, deleteEvent, putEvent } from '../actions';


class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }
  //ここで指定のidのレコードを取得する
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }
  
  renderField(field) {
    //ここでフォームが受け取る値やエラーの制御等を行っている
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  //イベントが起こった時に行われる動作を指定する
  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push("/")
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    this.props.history.push("/")
  }

  render () {
    const { handleSubmit, pristine, submitting, invalid } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          {/* pristineでフォーム空欄の時を、submittingでsubmitボタン押した後を、invalidで双方入力されていない時を、それぞれsubmitボタンを非活性化する */}
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid } />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick} >Delete</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}

//eventはreducers/events.jsから渡されている?
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

//mapDispatchToPropsはあるアクションが発生した時にreducerにタイプに応じた処理を実行させるための関数
export default connect(mapStateToProps, mapDispatchToProps)(
  // enableReinitializeはinitialValuesの変更がなければフォームを更新するというもの
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
