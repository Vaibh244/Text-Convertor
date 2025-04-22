import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fName.trim()) newErrors.fName = "First name is required";
    if (!formData.lName.trim()) newErrors.lName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted!", formData);
      alert("Message sent!");
      setFormData({ fName: "", lName: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
      <div className="my-div flex items-center justify-center gap-10 p-10 dark:bg-black">
        <div className="p-10">
          <h1 className="text-5xl font-bold mb-8 dark:text-blue-500 text-green-500">
            Contact Us
          </h1>
          <p className="mb-4 text-md">
            Have questions, suggestions, or need help with the Text Convertor?
          </p>
          <p className="mb-4 text-md">We’d love to hear from you!</p>
          <ul className="list-inside space-y-2">
            <li className="font-normal">
              <i className="fa-solid fa-envelope dark:text-blue-500 text-green-500"></i> : support@textconvertorapp.com
            </li>
            <li className="font-normal">
              <i className="fa-solid fa-phone dark:text-blue-500 text-green-500"></i> : +1 (555) 123-4567
            </li>
            <li className="font-normal">
              <i className="fa-solid fa-hourglass-start dark:text-blue-500 text-green-500"></i> : Mon–Fri, 9am–6pm (IST)
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-24 space-y-2">
          <div className="flex flex-col gap-4">
            <label htmlFor="fName">Name:</label>
            <div className="fName flex flex-row gap-4">
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-2 dark:text-black"
                type="text"
                id="fName"
                name="fName"
                placeholder="First Name"
                value={formData.fName}
                onChange={handleChange}
                required
              />
              <input
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-2 dark:text-black"
                type="text"
                id="lName"
                name="lName"
                placeholder="Last Name"
                value={formData.lName}
                onChange={handleChange}
                required
              />
            </div>
            {errors.fName && <p className="text-red-500 text-sm">{errors.fName}</p>}
            {errors.lName && <p className="text-red-500 text-sm">{errors.lName}</p>}
          </div>

          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              className="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:border-2 dark:text-black"
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="message">
            <label htmlFor="message">Message:</label>
            <textarea
              rows={5}
              className="text-black dark:text-black border-2 mt-3 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:border-2 w-full focus:border-blue-500 resize-none" 
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="submit">
            <button
              type="submit"
              className="btn bg-green-500 rounded-md font-md px-6 py-2 text-white dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
