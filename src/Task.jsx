import React from 'react'
import BootStrapContainer from './BootStrapContainer';

class Task extends React.Component {
  
  onClick() {
    this.props.changeTask()
  }

  render() {
    return (
      <div className="task-container">
        <BootStrapContainer>
          <div className="flex-center">
            <h3 className={ this.props.task.status? 'removed' : '' }>{ this.props.task.value }</h3>
            <div className="task-btn">
              <input type="checkbox" id={`task-${this.props.id}`} style={{ display: 'none' }} checked={this.props.task.status} onChange={this.onClick.bind(this)}/>
              <label for={`task-${this.props.id}`}/>
              <span className="fa fa-trash" aria-hidden="true" onClick={() => this.props.deleteTask()}></span>
            </div>
          </div>
        </BootStrapContainer>
      </div>
    )
  }
}

export default Task