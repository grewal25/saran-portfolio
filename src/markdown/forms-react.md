# Forms in React with Hooks

### How to use spread operator and hooks to work with forms in React


## Spread Operator ( … )
Suppose you have an array of numbers, arr1 and you want to add 5 to this array without affecting the arr1 array.

```js
const arr1 = [1,2,3,4]
```

now you want to add 5 at the end. We can use the push() method but that will alter the arr1 array. What we can do here is create a second array, arr2 and store all the elements in it and add 5 at the end. We can do that using the spread operator in JavaScript.

```js
const arr1 = [1,2,3,4]
const arr2 = [...arr1, 5]

//arr2 --> (5) [1,2,3,4,5]
//arr1 --> (4) [1,2,3,4]
```

## Add contact app
This part will show how to use hooks to use forms in React. How to use the spread operator to properly display the values a user provides in the input form.

In this app, we will add a person’s first and last name to a contact list with the use of React useState hook. There will be a form with two inputs available for first name and last name and a button to add those names.

*App.js*

```js
export default function App() {
const [inputValue, setInputValue] = useState({firstName:"",lastName:""})
function handleChange(){}
return (
<div>
   <form>
    <input
       placeholder="first name"
       name = "firstName"
       value ={inputValue.firstName}
       onChange = {handleChange}
       />
    </form>
</div>
);
```

## Updating input states
so first we added our form with one input field of the first name. We will do the same for the last name. In our state, we used useState to get the user input value and show it on the screen.

**Note:** *Following the convention, we used an array of inputValue and setInputValue. Always remember that inputValue is an object ( or could be a Boolean, number, or string ) and setInputValue is always a function that will alter the inputValue.*

The *handleChange* function will handle the change in the input value. It will keep an eye on whatever you type in the box. We can get the value typed in the input box with the help of handleChange function. We can grab the name and the value from the *event.target*:


```js
function handleChange(event){
    const {name, value } = event.target
}
```
Now let’s add the last name input field too:

```js
<form>
<input
  placeholder="first name"
  name = "firstName"
  value ={inputValue.firstName}
  onChange = {handleChange}
/>
<input
  placeholder="last name"
  name = "lastName"
  value ={inputValue.lastName}
  onChange = {handleChange}
/>
</form>

```

console.log() the handleChange function:

```js
function handleChange(event){
  const {name, value } = event.target
 setInputValue ({
  [name]:value
})
  console.log("value typed is:", value)
}
```

We can handle the submit with the button and adding the event listener *handleSubmit*:

```js
function handleSubmit(event) {
    event.preventDefault();
    setAddContact((prevContact) => [...prevContact, inputValue]);
}
```
Now if we see our console, it will only log either first name or last name. We don’t want that. We need to slightly change our code to work properly.

By changing handleChange function, we can see both first and last name:

```js
function handleChange(event){
const {name, value } = event.target
  setInputValue ( prevState =>{
  return {
    ...prevState,
    [name]: value
}
})
console.log("value typed is:",value)
}
```

we used the spread operator here to obtain the value.

**App.js**
```js
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({ firstName: "", lastName: "" });

  const [addContact, setAddContact] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [name]: value }));

    console.log("value typed is:", value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setAddContact((prevContact) => [...prevContact, inputValue]);
  }

  const contacts = addContact.map((c) => <p>{c.firstName} {c.lastName}</p>);

  console.log(addContact.firstName);

  return (
    <div>
      <form>
        <input
          placeholder="first name"
          name="firstName"
          value={inputValue.firstName}
          onChange={handleChange}
        />

        <input
          placeholder="last name"
          name="lastName"
          value={inputValue.lastName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add Contact </button>
      </form>
      {contacts}
    </div>
  );
}
```
*addContact* will be an array of contacts added by the user. We are mapping those array elements ( first and last name ) and inside the curly braces, we are displaying the names.

The CodeSandbox link:
[https://codesandbox.io/s/magical-keller-k6lu9?from-embed](https://codesandbox.io/s/magical-keller-k6lu9?from-embed)
