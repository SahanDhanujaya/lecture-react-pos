const Contact = () => {
  return (
    <div id="contact" className="p-4 bg-gray-200">
      <h1 className="text-2xl font-bold mt-4 text-center">Contact Us</h1>
      <p className="text-center">
        If you have any questions or inquiries, please feel free to contact us.
      </p>
      <div className="mt-6 mx-8 bg-gray-100 py-4 rounded-lg flex justify-center gap-4 shadow ">
        <form action="">
          <div className="flex flex-col items-center mt-6">
            <input
              className="border w-100 border-gray-600 p-2 rounded-2xl focus:outline-none mb-4"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="border w-100 border-gray-600 p-2 rounded-2xl focus:outline-none mb-4"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              className="border w-100 border-gray-600 p-2 rounded-2xl focus:outline-none mb-4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="flex gap-2 justify-end items-end">
            <button className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
              Clear
            </button>
            <button className="btn btn-primary bg-black text-white rounded text-sm p-2 mt-2 cursor-pointer">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
