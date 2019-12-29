import React, { Component } from "react";
import List from "./List";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      todos: [
        {
          item: "do hw"
        },
        {
          item: "wash laundry"
        },
        {
          item: "study for test"
        }
      ]
    };
  }

  onChange = e => {
    this.setState({
      term: e.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      todos: [...this.state.todos, { item: this.state.term }]
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter((todo, index) => index != id)
    });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="item"
            placeholder="Add todo"
            value={this.state.term}
            onChange={this.onChange}
          />
          <input type="submit" value="Add todo" />
        </form>
        <List items={this.state.todos} deleteClick={this.deleteTodo} />
      </React.Fragment>
    );
  }
}

export default Form;
