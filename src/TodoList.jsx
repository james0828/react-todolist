import Header from './Header'
import React from 'react'
import Task from './Task'
import Add from './Add'
import '../src/TodoList.scss'
import BootStrapContainer from './BootStrapContainer';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      status: false
    }
  }

  changeTodoList(str) {
    const newList = {
      id: this.state.todoList.length,
      value: str,
      status: false
    }
    this.setState({
      todoList: [...this.state.todoList, newList]
    })
  }

  deleteTask(id) {
    this.setState({
      todoList: this.state.todoList.filter(task => task.id !== id)
    })
  }

  changeStatus() {
    this.setState({
      status: !this.state.status
    })
  }

  changeTask(i) {
    const todoList = [...this.state.todoList]
    todoList[i].status = !todoList[i].status
    this.setState({ todoList })
  }

  render() {
    const todoList = this.state.todoList
    if (this.state.status) {
      todoList.sort((a, b) => {
        if (!a.status && b.status) {
          return -1
        } else if (a.status && !b.status) {
          return 1
        } else {
          return a.id > b.id ? 1 : -1
        }
      })
    }
    
    return (
      <div>
        <Header />
        <div className="todolist-container">
          {todoList.map((task, i) => (
              <Task task={task} id={i} deleteTask={() => this.deleteTask(task.id)} changeTask={() => this.changeTask(i)}/>
              )
            )
          }
          <BootStrapContainer>
            <div className="on-off-bar" style={{ display: this.state.todoList.length? 'flex' : 'none' }}>
              <h5>Move done items at the ends?</h5>
              <label class="switch" for="switch">
                <input type="checkbox" id="switch" onChange={this.changeStatus.bind(this)} checked={this.state.status}  />
                <span class="slider round"></span>
              </label>
            </div>
          </BootStrapContainer>
        </div>
        <Add addList={newList => {this.changeTodoList(newList)}}/>
      </div>
    )
  }
}

export default TodoList