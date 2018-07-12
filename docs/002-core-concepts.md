# Core concepts
> Core concepts.


### 1. Observable state
> 可观察的 state:

```js
import { observable } from "mobx";

class TodoViewModel {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}
```


## OR es5 style:
```js
import { decorate, observable } from "mobx";

class Todo {
    id = Math.random();
    title = "";
    finished = false;
}

decorate(Todo, {
    title: observable,
    finished: observable
});
```

### 2. Computed values
```js
class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
```

### 3.Reactions
```conf
Reactions are similar to a computed value, but instead of producing a new value, a reaction produces a side effect for things like printing to the console, making network requests, incrementally updating the React component tree to patch the DOM, etc. In short, reactions bridge reactive and imperative programming.

Reactions 与 compouted value 类似，但是他并不产生新的 value， 只会产生 effect。 举个例子，可以 console 一个 log， 更新 ReactDOM 等
```
