# How to Create a Toggle Button in React Using Conditional Rendering?
### Create a toggle button to show and hide data using the useState hook.

There are a few ways to render something conditionally in React. You can either use the && operator or conditional rendering to show and hide data in the JSX.

## If with Logical && Operator

```js
import React from "react";

const apple = true;
export default function App() {
  return <div>{apple && <h2> Apple </h2>}</div>;
}
```
You will see Apple written on your localhost. So how did it work?

First of all, we have created a boolean variable apple and assigned it a ‘true’ value. We can access this variable in our JSX and inside of our curly brackets, we can put our conditional logic.

```js
 <div>{apple && <h2>Apple</h2>}</div> 
 ```

 Here apple is the variable and our h2 tag will only work if apple is true, if apple is no longer true ( become false) h2 tag won’t work because our condition gets reversed (false).


*true && expression* always evaluates to expression, and *false && expression* always evaluates to false.

Why don’t you try and change the value of apple to false and see what happens?

## If-Else with Conditional Operator

```js
import React from "react";

const apple = true;
export default function App() {
  return <div>{apple ? "Apple" : "Banana"}</div>;
}

```
JavaScript conditional operator:

```js
condition ? true : false 
``` 
works inside JSX as well. For instance:

```js
<div>{apple ? "Apple" : "Banana"}</div>;
```
if apple is true, it will output Apple, otherwise Banana.

## Toggle button in React


```js
import React, { useState } from "react";

export default function App() {
  let [changeText, setChangeText] = useState(true);
  const handleChange = () => {
    return setChangeText(!changeText);
  };

  return (
    <div>
      <button onClick={() => handleChange()}>click me</button>
      {changeText ? "Apple" : "Banana"}
    </div>
  );
}
```
In React, to manage the local state, we have to use the hooks inside of the functional component. You can’t just simply update your state like this:

```js
const handleChange=()=>{
     return !changeText
}
```

You have to update the state via useState hook and import it at the top level.

```js
let [changeText, setChangeText] = useState(true);
```
The text in the bracket and assigned to some value is called array destructing.

```js
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
```

You can add an onClick call back function on the button, so when you click on the button, it will call the handleChange function, which will change the boolean value of changeText from true to false.

That’s about it, now you have a reusable toggle component to use in your app.