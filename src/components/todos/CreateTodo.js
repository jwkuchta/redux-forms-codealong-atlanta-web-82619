import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()

    this.state = {text: ''}
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
    // console.log(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo item: </label>
            <input type='text'onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type='submit'/>
        </form>
        <ul>
    {this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)} <br></br>
        </ul>
        {/* {this.state.todos} */}
        {/* makes our text appear under the form in real time */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
// I added mapStateToProps to display list items on the screen

// if not given any arguments, connect will return dispatch 
// as a prop to the component we're wrapping with connect. 
// So an alternative way to write the CreateTodo component could be:

// export default connect()(CreateTodo);

