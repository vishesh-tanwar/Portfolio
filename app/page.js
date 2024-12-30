import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="home flex flex-col items-center justify-center text-center min-h-screen px-4 pt-20 space-y-8 md:flex-row md:justify-evenly md:text-left mt-16 sm:mt-28 md:mt-0"
      >
        <div className="-mt-7 w-full max-w-2xl md:pr-7 ">
          <div className="text-3xl md:text-5xl text-white">
            Hello World,
            <div className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Myself Vishesh Tanwar & Welcome to my portfolio
            </div>
          </div>
          <div className="mt-4 text-lg md:text-xl text-white">
            I am an MCA student at BVICAM with a strong foundation in software
            development, specializing in the MERN stack. My expertise includes
            Python, JavaScript, and SQL, which I leverage to create impactful
            web applications. Explore my projects, skills, and educational
            journey to see how I can contribute to innovative solutions in the
            tech world.
          </div>
          <div className="mt-6">
            <a
              href="/Vishesh Tanwar 2025 CV.pdf"  
              download="Vishesh_Tanwar_CV" 
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Download CV 
            </a>
          </div>
        </div>

        <div className="-mt-7 w-3/4 max-w-sm md:w-full md:max-w-md">
          <Image
            src="/image.png"
            alt="Description of the image"
            width={200}
            height={200}
            className="w-full h-auto object-cover rounded-full"
          />
        </div>
      </div>

      {/* Education Section */}
      <section
        id="education"
        className="flex flex-col items-center justify-center min-h-screen text-white pt-16"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-8 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Education Journey
        </h1>
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl space-y-8 md:space-y-10 lg:space-y-12 text-center">
          <div className="border-l-4 border-blue-500 pl-4 md:pl-6 lg:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Master in Computer Applications (MCA)
            </h1>
            <p className="text-lg md:text-xl font-light">
              Bharati VidyaPeeth Institute of Computer Applications and
              Management
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Duration: 2023 - 2025
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 md:pl-6 lg:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Bcom (Hons)
            </h1>
            <p className="text-lg md:text-xl font-light">University of Delhi</p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Percentage: 80.14%
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Duration: 2020 - 2023
            </p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4 md:pl-6 lg:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              CBSE Class XII
            </h1>
            <p className="text-lg md:text-xl font-light">
              Tagore Public School
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Percentage: 76%
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Duration: 2019 - 2020
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 md:pl-6 lg:pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              CBSE Class X
            </h1>
            <p className="text-lg md:text-xl font-light">
              Tagore Public School
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Percentage: 80%
            </p>
            <p className="text-gray-400 text-sm md:text-base lg:text-lg">
              Duration: 2017 - 2018
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="skills-section relative min-h-screen flex flex-col items-center justify-center text-white"
      >
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </h1>
        <div className="text-xl skills-container relative w-full max-w-5xl h-[500px]">
          {[
            "React js",
            "JavaScript",
            "Node js",
            "Express js",
            "MongoDB",
            "MySQL",
            "Next js",
            "Python",
            "Java",
            "Data Structures & Algorithms",
            "Git",
          ].map((skill, index) => (
            <div
              key={index}
              className="skill-bubble absolute border-2 border-emerald-500 rounded-lg p-2"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20 mt-[-78]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          My Projects
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {/* Campus Voice Hub Card */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg relative group cursor-pointer">
            <div className="relative">
              <img
                src="/cvh.png"
                alt="Campus Voice Hub"
                className="w-full h-56 sm:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-6 rounded-lg">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Campus Voice Hub 
                  </h2>
                  <p className="text-sm sm:text-lg mb-4">
                    The web application is designed to facilitate efficient
                    grievance handling for students, faculty, and staff.
                    Administrators have the ability to view and address
                    grievances promptly. Users can maintain detailed profiles of
                    their registered grievances.
                  </p>
                  <a
                    href="https://project-frontend-ehku.onrender.com"
                    className="text-blue-600 hover:underline font-extrabold"
                  >
                    Live Website
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800">
                Campus Voice Hub - MERN tech
              </h2>
            </div>
          </div>

          {/* Reels Rover Card */}
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg relative group cursor-pointer">
            <div className="relative">
              <img
                src="/rr.png"
                alt="Reels Rover"
                className="w-full h-56 sm:h-64 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-6 rounded-lg">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">
                    Reels Rover
                  </h2>
                  <p className="text-sm sm:text-lg mb-4">
                    Developed a dynamic movie browsing platform allowing users
                    to explore an extensive collection of movies. Utilized a
                    fake API to fetch and display real-time movie data.
                    Integrated secure payment processing powered by Stripe.
                  </p>
                  <a
                    href="https://github.com/vishesh-tanwar/Reel-Rover"
                    className="text-blue-500 hover:underline font-extrabold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-center text-xl sm:text-2xl font-semibold text-gray-800">
                Reels Rover - MERN tech
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact Me
        </h1>
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form
              action="https://formsubmit.co/tanwarvishesh27@gmail.com"
              method="POST"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
