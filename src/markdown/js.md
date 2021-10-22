# Forms in React with Hooks:
#### How to use spread operator and hooks to work with forms in React

In the previous tutorial, we went through the basics of React and how to use hooks to alter states. This tutorial will continue from there and here we will see how to use hooks to update forms in React.

However, before moving forward, I want to cover a topic that will be used in most of the React app you going to build. And that topic is spread, operator.

### spead operator 
Suppose you have an array of numbers, arr1 and you want to add 5 to this array without affecting the arr1 array.

```js
const arr1 = [1,2,3]

```
now you want to add 5 at the end. We can use the push() method but that will alter the arr1 array. What we can do here is create a second array, arr2 and store all the elements in it and add 5 at the end. We can do that using the spread operator in JavaScript.

![alt text](https://miro.medium.com/max/425/1*sDDAygIDTHIGJvNpw5PAqw.jpeg)

### Add Contact App 
This part will show how to use hooks to use forms in React. How to use the spread operator to properly display the values a user provides in the input form.

In this app, we will add a person’s first and last name to a contact list with the use of React useState hook. There will be a form with two inputs available for first name and last name and a button to add those names.

**App.js**
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

### updating input states
so first we added our form with one input field of the first name. We will do the same for the last name. In our state, we used useState to get the user input value and show it on the screen.

**NOTE** :  Following the convention, we used an array of inputValue and setInputValue. Always remember that inputValue is an object ( or could be a Boolean, number, or string ) and setInputValue is always a function that will alter the inputValue.

The ``` handleChange``` function will handle the change in the input value. It will keep an eye on whatever you type in the box. We can get the value typed in the input box with the help of ```handleChange```function. We can grab the name and the value from the ```  event.target```










~~~js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
)
~~~

