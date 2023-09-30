import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-2xl mb-5">Contact</h1>
      <div className="p-2 rounded-lg border">
        <h1 className="text-2xl text-center font-bold capitalize mb-10">
          Got a Question?
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-bold text-lg text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-lg text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-bold text-lg text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-black text-white text-lg py-2 px-6 rounded-md hover:bg-opacity-90"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
