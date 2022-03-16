import Footer from "../../component/Footer/Footer";

const Archive = () => {
  return (
    <>
      <div>
        <div>
          <div className="lg:px-4 xl:px-0">
            <div className="flex justify-center gap-y-12 lg:gap-x-12 pt-24 flex-col lg:flex-row items-center">
              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="prod-1.jpeg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      <a href="./caching">Method to super-boost productivity</a>
                    </div>
                    <ul>
                      <li className="font-light">
                        We all have wardrobes full of clothes and still, we
                        spend most of our time deciding what to wear. One of the
                        ways to solve this is to group all the
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #productivity
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="fear.jpeg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      <a href="./not-to-fear-old-age">
                        Why you shouldn't fear the 30s{" "}
                      </a>
                    </div>
                    <ul>
                      <li className="font-light">
                        If anyone asks you to pick an option from the two
                        situations below, which one would you pick? You are
                        young but poor You are old but rich?
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #philosophy
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="work-1.jpg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-7">
                      <a href="./how-to-start-when-you-are-stuck">How to start when you are stuck
                      </a>
                    </div>
                    <ul>
                      <li className="font-light">
                        Writer’s block is real, procrastination is real too. For
                        most days, I think I do alright and don’t need to push
                        myself
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #productivity
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="hidden flex justify-center gap-y-12 lg:gap-x-12 pt-24 flex-col lg:flex-row items-center">
              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="stuck.jpeg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      <a href="./how-to-start-when-you-are-stuck">
                        Science of Deep Focus
                      </a>
                    </div>
                    <ul>
                      <li className="font-light">
                        We all have wardrobes full of clothes and still, we
                        spend most of our time deciding what to wear. One of the
                        ways to solve this is to group all the
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #productivity
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="fear.jpeg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">
                      Why you shouldn't fear the 30s
                    </div>
                    <ul>
                      <li className="font-light">
                        We all have wardrobes full of clothes and still, we
                        spend most of our time deciding what to wear. One of the
                        ways to solve this is to group all the
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #philosophy
                      </span>
                    </div>
                  </div>
                </div>
              </article>

              <article className="">
                <div className="max-w-xs md:max-w-md lg:max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-3xl">
                  <img
                    src="prod-1.jpeg"
                    className="w-full h-2/3 hover:shadow-3xl"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-10">
                      Science of Deep Focus
                    </div>
                    <ul>
                      <li className="font-light">
                        We all have wardrobes full of clothes and still, we
                        spend most of our time deciding what to wear. One of the
                        ways to solve this is to group all the
                      </li>
                    </ul>

                    <div>
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-sm mr-2 mt-2">
                        #productivity
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
