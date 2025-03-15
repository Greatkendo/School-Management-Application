function ContactUs() {
 return (
      <div className="flex items-center gap-10 justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">We Listen</h2>

          <form className="flex flex-col">
            <input placeholder="Full Name" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <input placeholder="Email" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>
            <input placeholder="Phone Number" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>
            <textarea placeholder="Cover Letter" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="cover_letter"></textarea>
            <input placeholder="Resume" className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="file"/>

            <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
          </form>
        </div>

         <div className="flex justify-center items-center h-screen">
           <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317713.0806479595!2d-122.50764000197793!3d37.75767935030371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1d8cc05061%3A0xa4a8c973792d9cf1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
             width="600"
             height="450"
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
             className="border-0 rounded-md shadow-md"
           ></iframe>
         </div>
       </div>
   );
};

export default ContactUs;