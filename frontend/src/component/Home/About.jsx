import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Leader's Model School</title>
        <meta
          name="description"
          content="Learn about our mission, values, and the team behind our Citadel of Learning."
        />
      </Head>

      <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="text-center bg-blue-400 text-white py-12">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg mt-4">
              We remain your trusted partner in school management
            </p>
          </div>

          <div className="py-8 px-6 sm:px-16">
            <h2 className="text-3xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We aim to provide schools with a powerful, easy-to-use, and secure
              school management system that enhances learning outcomes,
              administrative efficiency, and communication among staff,
              students, and parents.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mt-8">
              Our Values
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-users"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl">Collaboration</h3>
                  <p className="mt-2 text-gray-600">
                    We believe in the power of collaboration among teachers,
                    students, and parents to create an engaging learning
                    environment.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl">Security</h3>
                  <p className="mt-2 text-gray-600">
                    We prioritize data security and privacy, ensuring that all
                    personal and academic information remains confidential and
                    protected.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl">Innovation</h3>
                  <p className="mt-2 text-gray-600">
                    We are committed to integrating cutting-edge technology into
                    our platform to make school management smarter and more
                    efficient.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-xl">Support</h3>
                  <p className="mt-2 text-gray-600">
                    Our dedicated support team is always ready to assist
                    educators, administrators, and parents with any questions or
                    technical issues.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-gray-800 mt-8">
              Meet Our Team
            </h2>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <div className="w-48 text-center">
                <img
                  src="founder.jpeg"
                  alt="Founder"
                  className="rounded-full w-32 h-32 mx-auto"
                />
                <p className="mt-2 font-semibold text-lg">Aliyu Dan Maigari</p>
                <p className="text-gray-500">Founder & CEO</p>
              </div>
              <div className="w-48 text-center">
                <img
                  src="principal.jpg"
                  alt="Principal"
                  className="rounded-full w-32 h-32 mx-auto"
                />
                <p className="mt-2 font-semibold text-lg">Abraham Okonkwo</p>
                <p className="text-gray-500">Head of Learning/Principal</p>
              </div>
              <div className="w-48 text-center">
                <img
                  src="h-admin.jpg"
                  alt="H-Admin"
                  className="rounded-full w-32 h-32 mx-auto"
                />
                <p className="mt-2 font-semibold text-lg">Sarah Johnson</p>
                <p className="text-gray-500">Head of Admin/Vice-Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
