import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  deleteHandler = index => {
    this.props.deleteClick(index);
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>
              {item.item}{" "}
              <button
                onClick={e => {
                  this.deleteHandler(index);
                  console.log(index);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
