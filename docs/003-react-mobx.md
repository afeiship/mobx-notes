# React and Mobx
> React and mobx.

## observer:
```js
@observer
class TodoListView extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <div>
          <ul>
              {todoList.todos.map(item => <TodoView todo={item} key={item.id} /> )}
          </ul>
          Tasks left: {todoList.unfinishedTodoCount}
      </div>
    );
  }
}
```
