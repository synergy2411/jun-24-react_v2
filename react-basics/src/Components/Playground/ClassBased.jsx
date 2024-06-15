import { Component } from "react";

class ClassBased extends Component {
  state = {
    toggle: false,
    todoCollection: [],
  };

  constructor(props) {
    super(props);
    // this.toggleClickHandler = this.toggleClickHandler.bind(this)
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Did Mount");
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((resp) => resp.json())
    //   .then((todos) => this.setState({ todoCollection: todos }))
    //   .catch(console.error);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     //   const rnd = Math.round(Math.random() * 10);
  //     //   console.log("Random Number : ", rnd);
  //     //   console.log("Next Props", nextProps);
  //     //   console.log("Next State : ", nextState);
  //     //     return rnd > 4;
  //     const isPropsMatch = this.props.show === nextProps.show;
  //     return !isPropsMatch;
  //     // return true;
  //   }

  componentDidUpdate() {
    console.log("Component Did Update : ", this.props.value);
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  toggleClickHandler = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    console.log("Render : ", this.props.value);
    return (
      <>
        <h1>Class based component loaded</h1>

        <button className="btn btn-primary" onClick={this.toggleClickHandler}>
          Toggle
        </button>

        {this.state.toggle && <p>This paragraph will toggle</p>}
        <hr />
        <ul>
          {this.state.todoCollection.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ClassBased;

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   const anotherFn = () => {
//     console.log(this);
//   };
// }
