import React from 'react';
import ReactDOM from 'react-dom';

type Todo = {
  text: string,
  done: boolean
}

type Props = {}

type State = {
  inputValue: string,
  todos: Todo[]
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: '',
      todos: [{ text: 'Sacar la basura', done: false }]
    };
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={ev => this.setState({ inputValue: ev.target.value })}
          onKeyUp={ev => {
            if (ev.key === 'Enter' && this.state.inputValue !== undefined) {
              this.setState({
                inputValue: '',
                todos: [
                  ...this.state.todos,
                  {
                    text: this.state.inputValue,
                    done: false
                  }
                ]
              });
            }
          }}
        />

        <ul>
          {this.state.todos.map(todo => (
            <li>
              <input
                type='checkbox'
                checked={todo.done}
                onChange={ev => {
                  console.log(ev.target.checked);
                }}
              />
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
