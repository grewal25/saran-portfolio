
import React from 'react';
import './ReactJS.css'


export default function ReactJS() {
    return(
        <div className="blog-main-heading">
       

        <div className="blog-right-side">

        
       
        <h1 className="heading-1">Web Development in React: Functional Component: Introduction, HelloWorld and JSX</h1>
          
        <p>

        React is the most famous library in JavaScript and its demand growing pretty rapidly in the last few years.
        </p>
        <h1 className="heading-2">Environment Setup</h1>
        We will be using the VS studio code editor and MAC operating system. If you are using any other operating system, for the most part, you won’t face any difference. The only difference is installing some of the packages, so just go to the respective documentation and you should be good.
      <h1 className="heading-3">Tools</h1>
      <ul>
        <li>NPM</li>
        <li>Node.js</li>
        <li>Web Browser</li>
        <li>React-developer tool</li>
        <li>VS code text editor</li>
      </ul>

      <h1 className="heading-2">HelloWorld</h1>   
          <p>After installing node and npm, we are ready to write our first code.</p>
      <h1 className="heading-3">step 1:</h1>
        <p>go to the folder of your preference and type the following command</p>

        <code>$ create-react-app hello-world
          $ cd hello-world</code>


    <p>Open this project in VS Code. You will have the following structure 
      under hello-world directory</p>

      <img className="blog-image-big"
      src="/1.png" alt="first image"/>

     <p>in the src folder, we have these files. We have index.js, under this file we are rendering App.js
We will see later on what and how these files work. For now, we are going to remove everything in our src folder and start from the beginning.
You can either select and delete these files or just run this command
</p> 
<code>$ rm -rf src/*
$ touch src/index.js</code>

<h1 className="heading-2">step 2:</h1>
<p>add the following code in src/index.js file</p>
<div>
    {/* <code>
      
            import React from 'react';
            import ReactDOM from 'react-dom';

              <span>function</span> <span>HelloWorld()</span> 
              <span> {} </span> <span></span>
                <span>return</span> (
              <div>
                Hello World of React!!
              </div>
            );
           

            ReactDOM.render(
            <HelloWorld />,
            document.querySelector('#root')
          )
          
    </code> */}
</div>
<h1 className="heading-2">JSX</h1>
<p>

If you never saw this kind of code before, this is JSX. 
We declared a function HelloWorld as any JS function.
 We have a return function inside and it has div tag in it. 
   This bizarre combination of JS and HTML, which made React so interesting and comparatively 
   easier to use. Just like HTML tags, we can use this function and use it like a custom tag ( a custom function in React’s case ). We can’t use the script tag like ES5.
</p>

<h1 className="heading-3">Explanation of code</h1>
<p>
<p>line 1,2: we are importing React and ReactDOM</p>
<p>line 4: we declared a function, which is a JSX and it simply returns a statement ‘ Hello World from React!!’</p>
<p>line 12: We are rendering this function inside the #root tag present in index.html file, shown below.</p>
</p>

<img className="blog-image" 
src="/2.png" alt="second photo" />
      
<p>Now, it is clearing to you how these tags work and with the help of plain JS, we can just render our functional components in HTML. So cool!!!
to run, just type the following command</p>
<code>npm start</code>
<br></br>
<img 
className="blog-image"
src="/3.png" />
      
      
<h1>Dig Deep in React</h1>

<p>
JSX looks very similar to HTML ( or XHTML to be precise ). 
The ReactDOM.render method in above line 12 takes 2 arguments, first is the component or 
React Element and
 where you want to render in ( in our case, we have #root tag inside of index.html ).
</p>
<code>ReactDOM.render([your React Element/Component], [DOM element])</code>

<p>
The other thing you have notices that React has these HTML tags 
without quotes. So, it is clear that React is not accepting and putting
 these elements as HTML but in another different ways. Actually, a whole
  lot of stuff is going on behind the scene and with the help of babel, we can 
  see what is going on. JSX actually creates the DOM element, however, with the help 
  of JSX, it becomes very easies to do so.
</p>

<h1>JSX Compilation to JS</h1>
<img className="blog-image"
src="/4.png" />
<p>Now, we can see the devil of code. I mean right-hand side is kinda hard to understand but remember it is just a simple function ( HelloWorld() ), for complicated logic, we won’t wanna use vanilla JS to create, update and other operations and React looks way easier and intuitional. 
  This is the reason we use React.</p>
<p>THe signature of React.createElement function</p>

<code>
React.createElement(
   string|element,
   [propsObject],
   [children...]
)
</code>

<p>The HTML tags go inside of the string|element section, or any component ( HelloWorld) can also go there. The propsObject and children are optional.
</p>

<img
className="blog-image"
src="/5.png" />

<p>If we separate the Hello and World part of the program, Babel would convert
   it something like this:</p>

<p>TIP: A functional component always return a single element. 
  As you can see, the Hello function returns a span tag, same with World function. 
  The HelloWorld function returns a div tag. We either can use fragment or div tags to 
  return the value of a functional component.
</p>

<img className="blog-image-small"
src="/6.png" />


<h1>JavaScipt inside of JSX</h1>

<p>we will create a short program to see how to use JS inside of JSX. Our program is pretty short, it will 
  just console log the name when we press the button.</p>

  <h1>Example 1: create a button in a functional component in React</h1>

<code>
{/* import ReactDOM from 'react-dom';

function HelloWorld(){
  
  return (
    <div>
      <button onClick={()=> console.log('john')}>     
        Click Me
        </button>   
    </div>
  )
}


ReactDOM.render(
  <HelloWorld />,
  document.querySelector('#root')
) */}
</code>
<p>
line 1: importing ReactDOM.
line 2: we created a functional component named HelloWorld.
line 5: the return statement
line 6: div tag starts
line 7: we created a button, and we have a event handler onClick, which runs at every click. This onClick function prints the name john with every click.
line 15: ReactDOM.render function takes 2 arguments, first is our HelloWorld component and other is #root our DOM element.
</p>


<img 
className="blog-image-small"
src="/7.png" />

<h1>What have we learned so far?</h1>

<p>
First, we created our program with create-react-app and learned the structure of the app. We deleted all the files in the src folder and started from the beginning. We created an index.js file put React code in it. Then we learned what JSX is and how HTML and JS worked inside of JSX. After that, we created our first app that uses both JSX and JS to print the name of a person when we press the Click Me button.
We will come back to basics in future tutorials as well because a strong base is necessary to hold the upcoming important topics. We will meet in the next tutorial, Bye :)
</p>











        
</div>
</div>
  


);
    
}