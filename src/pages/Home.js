import { useAuth } from "../store/auth";
import image1 from "../components/images/image1.png"

const Home = () => {
  const {user}= useAuth();  
  return (
    <>
      <header class="bg-white dark:bg-gray-800 my-44 mx-7 sm: mx-10">
        <div class="container flex flex-col px-3 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div class="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div class="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
              <button class="w-3 h-3 mx-2 bg-red-700 rounded-full md:mx-0 focus:outline-none"></button>
              <button class="w-3 h-3 mx-2 bg-red-600 rounded-full md:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-red-500 rounded-full md:mx-0 focus:outline-none "></button>
              <button class="w-3 h-3 mx-2 bg-red-400 rounded-full md:mx-0 focus:outline-none "></button>
            </div>

            <div class="max-w-lg md:mx-12 md:order-2">
              <div class="text-xl font-normal  tracking-wide text-my_darkgray dark:text-white md:text-1.5xl">
                Hello {user.username }! welcome to <br />
              </div>
              <h1 class="text-3xl font-bold  tracking-wide text-red-600 dark:text-white md:text-4xl">
                BOOK STACK
              </h1>
              <p class="mt-4 mt-12 text-gray-600 dark:text-gray-300">
                Dive into a world of books on our platform, where details unfold
                effortlessly. Discover authors, publishers, and published dates
                with captivating descriptions, all in one seamless journey.
                Satiate your literary curiosity on our one-stop destination for
                comprehensive book exploration!
              </p>

              <ol class="items-center sm:flex mt-12">
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-my_lightgray rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        class="w-3.5 h-3.5 text-my_darkgray dark:text-my_darkgray"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Authors
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Author Insight Unveiled Here.
                    </time>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-my_lightgray rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        class="w-3.5 h-3.5 text-my_darkgray dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Publishers
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Publisher Details Revealed Instantly.
                    </time>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center w-10 h-10 bg-my_lightgray rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <svg
                        class="w-3.5 h-3.5 text-my_darkgray dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      Description
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Synopsis Unraveled, Stories Explored.
                    </time>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 md:w-1/2 ">
            <img
              class="object-cover w-full h-full max-w-2xl rounded-md"
              src={image1}
              alt="apple watch photo"
            />
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
