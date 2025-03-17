function Information () {
 return (
  <section>
      {/* Body section */}
      <div className="flex flex-col items-center text-center gap-4 mt-8">
        <h1 className="text-3xl text-gray-700 font-medium font-sans">
          <span className="text-5xl">W</span>elcome to Leaders model School
        </h1>

        <p className="w-[66rem] text-lg">
          Our dedicated educators, innovative programs, and supportive community
          empower every student to thrive, discover their passions, and prepare
          for a bright future. Join us and be part of a vibrant educational
          journey that fosters curiosity, creativity, and growth."
        </p>
        <button className="bg-cyan-200 px-[3rem] py-1 rounded-lg text-gray-800 font-medium animate-pulse">
          Read more
        </button>
      </div>
      <div className="bg-emerald-50">
        <div className="mt-[4rem] container mx-auto ">
          <div className="flex items-center gap-[10rem] p-2">
            <h3 className="w-[55rem] text-center text-xl font-medium">
              At Leaders Model School, we provide an inspiring and dynamic
              learning environment where students are encouraged to reach their
              full potential. Our commitment to academic excellence, personal
              growth, and leadership development.
            </h3>

            <img
              className="w-[70rem] h-[30rem] object-cover rounded-md"
              src="/pexels-davegarcia-31085767.jpg"
              alt=""
            />
          </div>

          <div className="flex items-center gap-[10rem] mt-[4rem]">
            <img
              className="w-[65rem] h-[25rem] object-cover rounded-md"
              src="/pexels-pavel-danilyuk-7942522.jpg"
              alt="graduation"
            />
            <h3 className="w-[55rem] text-center text-xl font-medium">
              Congratulations to our 4500 graduates! At Leaders Model School, we
              are proud to celebrate the hard work, determination, and
              achievements of our students. As they step into the next chapter
              of their lives, we are confident they will continue to lead with
              integrity, inspire others, and make a positive impact in the
              world.
            </h3>
          </div>
        </div>
      </div>
      {/* PRINCIPAL SECTION */}
      <div className="flex gap-[10rem] mt-[8rem] container mx-auto items-center">
        <img
          className="w-[40%] h-[85vh] rounded-lg object-cover"
          src="/pexels-max-fischer-5212361.jpg"
          alt="Principal"
        />
        <h3 className="w-[40rem] text-lg text-slate-800 font-extralight text-justify">
          <span className="text-3xl">W</span>elcome to Leaders Model School! As
          Principal, I am proud to lead an institution that prioritizes academic
          excellence, personal development, and leadership growth. Our school is
          not just a place of learning; it is a community where students are
          encouraged to challenge themselves, explore their passions, and
          develop into responsible, confident individuals ready to make a
          difference in the world. Over the years, our school has built a
          reputation for providing a well-rounded education, blending rigorous
          academic programs with innovative extracurricular activities that
          support the growth of the whole child. From our early years program
          through to high school, we aim to foster critical thinking,
          creativity, and character. Our dedicated faculty and staff are the
          backbone of our success. They go above and beyond to ensure that each
          student receives the support and attention they need to excel
          academically and personally. Together, we have seen our students
          achieve outstanding results in national exams, extracurricular
          competitions, and community service initiatives. As we continue to
          grow, our focus remains on providing a nurturing environment that
          equips our students with the skills, knowledge, and confidence to lead
          in an ever-changing world. The future is bright for our students, and
          I am honored to be part of their educational journey. Thank you for
          being part of the Leaders Model School family. [Principal's Name]
          Principal, Leaders Model School
        </h3>
      </div>
  </section>
 );
};

export default Information;