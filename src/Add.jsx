import React from 'react'
import BootStrapContainer from './BootStrapContainer'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  changeValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  addList() {
    if (this.state.value !== '') {
      this.props.addList(this.state.value)
      this.setState({
        value: ''
      })
    } else {
      alert('please input some text')
    }
  }

  render() {
    return (
      <BootStrapContainer>
        <div className="add">
          <h3>Add to the todo list</h3>
          <input type="text" value={this.state.value} onChange={this.changeValue.bind(this)} />
          <button onClick={this.addList.bind(this)}>ADD ITEM</button>
        </div>
      </BootStrapContainer>
    )
  }
}

export default Add