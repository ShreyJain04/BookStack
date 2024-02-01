import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const Services = () => {
  const [searchValue, setSearchValue] = useState("");
  const [bookInfo, setBookInfo] = useState({});

  const getBookInfo = async () => {
    try {
      let url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyB-Av6TJI6fhwzg420_O-uUa-m1N5e2j8w`;
      const res = await fetch(url);
      const data = await res.json();

      const { volumeInfo } = data.items[0];
      const {
        title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        description,
      } = volumeInfo;

      console.log("title", title);
      console.log("authors", authors);
      console.log("volumeInfo", volumeInfo);
      console.log("discription", description);

      const myNewBookInfo = {
        title,
        subtitle,
        authors,
        publisher,
        publishedDate,
        description,
      };
      setBookInfo(myNewBookInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookInfo();
  }, []);

  return (
    <>
      <div class="flex items-center mt-32 mx-8 sm:pt-10">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full mx-4">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-my_pink4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-my_blue focus:border-my_blue block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-my_purple dark:focus:border-my_purple"
            placeholder="Search a book..."
            required
            autoFocus
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </div>
        <button
          type="submit"
          class="p-3.5 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-blue-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-my_purple dark:bg-blue-600 dark:hover:bg-my_purple dark:focus:ring-my_purple"
          onClick={getBookInfo}
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>

      <BookCard bookInfo={bookInfo} />
    </>
  );
};

export default Services;
