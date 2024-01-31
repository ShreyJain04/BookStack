import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../App";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (user && userData) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(baseurl+"/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactFormData);
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div>
      <div class=" py-8 lg:py-16 px-4 mx-auto my-16 max-w-screen-md md:py-36 ">
        <h2 class="mb-0 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <br />
        <p class="mb-2 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              id="username"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
            />{" "}
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              required
              class="shadow-sm p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
            />{" "}
            <br />
            <label htmlFor="text">Message</label>
            <textarea
              type="text"
              name="message"
              placeholder="Your message"
              id="message"
              required
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-my_purple focus:border-my_purple dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
            />{" "}
            <br />
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-my_blue sm:w-fit hover:bg-my_purple focus:ring-4 focus:outline-none focus:ring-my_purple dark:bg-my_purple dark:hover:bg-my_purple dark:focus:ring-my_purple"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>

    </>
  );
};
export default Contact;
