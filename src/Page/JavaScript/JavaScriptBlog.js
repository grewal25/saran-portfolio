

export default function JavaSciptBlog(){
    const ex1 = `function example(){
        return hello ;
    }`
    return (
        <div className="main">
           <h3>JS</h3>
           <p>The arguments object is a local variable available within all non-arrow functions. You can refer 
               to a function's arguments inside that function by using its arguments object. It has entries for
                each argument the function was called with, with the first entry's index at 0.</p>

            <p>Let's see how to create a function in JS</p>
            <code>
                {ex1}
                
            </code>
        </div>
    )
}