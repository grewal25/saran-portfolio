import Footer from "../../component/Footer/Footer";

export default function Caching() {
  return (
    <div>
    <div className="max-w-4xl m-auto pt-12">
      <div>
        <h1 className="text-5xl font-mono h-96 pt-36 text-center lg:text-left">
          Method to super-boost productivity
        </h1>
      </div>

      {/* <div className="w-100">
                <img src="/caching.jpeg" />
              </div> */}
    <div className="px-6 lg:px-0">

      <p className="text-xl pt-8 font-sans antialiased">
        We all have wardrobes full of clothes and still, we spend most of our
        time deciding what to wear. One of the ways to solve this is to group
        all the like things together, for instance, group shirts together along
        with jackets and sweaters together. Now you solve half of the problem,
        however, how do you still have another half of the problem, what to wear
        now?
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        Caching is one of the very fundamental concepts of computer science
        where we substantially improve the speed of a system using very
        sophisticated techniques where we kind of anticipate the output as soon
        as we receive the input.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        Memory is expensive, it costs manufacturers a lot of resources to
        produce modern solid-state hard drives, and still with the level of
        complexities we have in our computers, engineers and computer scientists
        came up with very nice techniques to counter these challenges. First, we
        need hierarchies of memory to store things. For instance, you may need
        to store your personal expense report, you would do something like this:
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        Home - Personal - Expense Report - June
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        Caching: In laymen’s terms, caching is pre-processed input when input
        has not even been called. The advantage of caching is it saves time.
        When you can predict what task you are going to do next, you can prepare
        in advance for a particular task.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        For instance, let say you go to the gym and you take your post-workout
        protein after the gym, one of the things you can do in advance is to
        prepare your meal/shake before or you can buy it from somewhere. You
        cached your post-workout meal beforehand and it saves time. This simple
        hack can greatly improve your system ( if you have one) and some
        estimates say it improves 20–30% of your system’s efficiency.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        Now you can imagine you have a system of storing files in a box. What
        would be the most optimal and efficient way of storing files so it takes
        you the least amount of time to search a particular book?
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        One strategy is to order files alphabetically. However, imagine a
        library with many books, what would be the most efficient algorithm to
        find the book you are looking for? You may personally not have so many
        books but research shows fascinating results.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
        We know according to Pareto distribution, 80% of effects are caused by
        20% cause. So at a given moment, only 20% of books will be actively read
        by people in a given library and the other 80% could just sit for a long
        time before anyone comes and pick it. So, it may be a better idea to
        create a place with those frequently used books and surprisingly, the
        order of stacking books doesn’t produce any significant improvement in
        finding a particular book. Books that are read frequently would always
        remain on top because as soon as they hit the stack, someone will again
        come and read them because they are already in high demand.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
      C A B D
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
      and after a while, you see B has been recently used, so remove it from the task.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
      C A D will be your current task now and so on.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
      By applying the same principle, you can arrange your cache of different tasks by removing the Least Recently Used item from the list of tasks and focusing on things that you use actively.
      </p>

      <p className="text-xl pt-8 font-sans antialiased">
      So coming to our original question, how should we arrange our clothes. Well, you can still group the like things together but on top of that, you should create your own little cache of clothes you wear most often. You can have two separate collections of clothes, one group-like, and another cache, and remove/add items as per their frequency of use.
      </p>

      </div>
      
    </div>
    <Footer />
    </div>
  );
}
