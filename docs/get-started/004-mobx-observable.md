# observable

## codes:
```js
const obArray = observable([1,2,3]);
const obObj = observable({ a: 1, b: 2});
const obMap = observable(new Map());
const obNum = observable.box(1);
const obStr = observable.box('Hello');


```

## observable.box: set/get boxed value
> 除 Array/Map/Object 之外的值都用 box 来装箱

```js
import {observable} from "mobx";

const cityName = observable.box("Vienna");
console.log(cityName.get());
// prints 'Vienna'

cityName.observe(function(change) {
    console.log(change.oldValue, "->", change.newValue);
});

cityName.set("Amsterdam");
// prints 'Vienna -> Amsterdam'
```

## types:
```js

// ObservableArray
// ObservableObject
// ObservableMap

```

## @observable
```js
import { observable, computed } from "mobx";

class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}
```

