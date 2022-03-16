import Footer from "../../component/Footer/Footer";

const Archive = () => {
  return (
    <>
      <div>
        <div>
          <div className="lg:px-4 xl:px-0">
            <div className="flex justify-center gap-y-12 lg:gap-x-12 pt-12 md:pt-24 flex-col lg:flex-row items-center px-6 md:px-0">
              <article className="">
                <div className="max-w-lg md:max-w-md rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl h-xl4">
                  <img
                    src="react-toggle.png"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      <a href="./how-to-create-a-toggle-button-in-react">How to create a Toggle Button in React using conditional rendering?</a>
                    </div>
                    <ul>
                      <li className="font-light">
                        Create a toggle button to show and hide data using the useState hook.
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #React
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="">
                <div className="max-w-lg md:max-w-md rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl h-xl4">
                  <img
                    src="forms.png"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      <a href="./toggle">Forms in React with Hooks</a>
                    </div>
                    <ul>
                      <li className="font-light">
                      How to use spread operator and hooks to work with forms in React
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #React
                      </span>
                    </div>
                  </div>
                </div>
              </article>

             
            </div>

            

           
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Archive;
