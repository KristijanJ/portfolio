import developerImg from "/developer.svg";

function Home() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0e0f1c] text-white min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0f1c]/95 backdrop-blur-sm border-b border-gray-800">
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-amber-400 font-semibold">AWS</span> Cloud{" "}
            <span className="text-teal-400 font-semibold">Engineer</span>
          </div>
          <ul className="flex gap-8">
            <li>
              <a href="#hero" className="hover:text-teal-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              Kristijan
              <br />
              <span className="text-teal-400">Jovanovski</span>
            </h1>

            <p className="text-gray-400 leading-relaxed text-xl">
              Hello, I am a{" "}
              <span className="text-teal-400 font-semibold">
                Full-Stack Cloud Engineer
              </span>
              {", "}
              based in Skopje, Macedonia. I build scalable, cloud-native
              applications and infrastructure on{" "}
              <span className="text-amber-400 font-semibold">AWS</span>.
            </p>

            <div className="flex gap-4">
              <button className="bg-teal-400 hover:bg-teal-300 text-black px-8 py-3 rounded-full font-semibold transition hover:cursor-pointer">
                Browse projects
              </button>
              <button
                className="bg-amber-400 hover:bg-amber-300 text-black px-8 py-3 rounded-full font-semibold transition flex items-center gap-2 hover:cursor-pointer"
                onClick={scrollToAbout}
              >
                About me
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Doodles background */}
            {/* <div className="absolute inset-0 text-teal-500/30 text-sm lg:text-base">
              <div className="absolute top-10 left-10 rotate-12">html</div>
              <div className="absolute top-20 right-20">css</div>
              <div className="absolute top-40 left-20">AWS</div>
              <div className="absolute bottom-40 right-10">Python</div>
              <div className="absolute bottom-20 left-40 -rotate-12">C++</div>
              <div className="absolute top-32 right-32 rotate-45">⚡</div>
              <div className="absolute bottom-32 left-10">💡</div>
            </div> */}

            {/* Person illustration placeholder */}
            <div className="relative w-200 h-200 flex items-center justify-center flex-col">
              <img src={developerImg} alt="" />
            </div>
          </div>
        </div>

        {/* Scroll down button */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-teal-400 transition group hover:cursor-pointer"
        >
          <svg
            className="w-6 h-6 group-hover:text-teal-400 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="container mx-auto px-6 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-6xl font-bold">
              About <span className="text-teal-400">me</span>
            </h2>
            <p className="text-teal-400">
              Building Cloud Infrastructure That Works{" "}
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* What I Build */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">
                    What I Build
                  </h3>
                  <ul className="text-gray-400 space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        Cloud infrastructure with{" "}
                        <span className="text-gray-300">
                          Terraform, AWS CDK, and CloudFormation
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        Serverless architectures using{" "}
                        <span className="text-gray-300">
                          Lambda, API Gateway, and DynamoDB
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        Container-based solutions with{" "}
                        <span className="text-gray-300">
                          Docker and Kubernetes (EKS)
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        GenAI-powered applications leveraging{" "}
                        <span className="text-gray-300">AWS Bedrock</span>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-400 mr-2">▹</span>
                      <span>
                        Full-stack web and mobile apps with{" "}
                        <span className="text-gray-300">
                          TypeScript, React, Python, and React Native
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Recent Work */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold text-lg">
                    Recent Work
                  </h3>
                  <ul className="text-gray-400 space-y-2 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>
                        Implemented cloud migration strategies, moving legacy
                        applications to AWS
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>
                        Built GenAI chatbot solutions using AWS Bedrock Agents
                        and Strands Agents
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>
                        Set up production Kubernetes clusters on EKS for
                        multi-tenant SaaS platforms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>
                        Architected serverless event-driven systems using
                        EventBridge, SQS, and Lambda
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">✓</span>
                      <span>
                        Built cross-platform mobile application using React
                        Native and Expo
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed">
                My career started in customer success and frontend development
                before transitioning to cloud engineering. That journey taught
                me something valuable:{" "}
                <span className="text-gray-300 italic">
                  the best technical solutions are the ones that teams can
                  actually use and maintain
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151f2b] py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          {/* Navigation with icons */}
          <div className="flex justify-center gap-12 mb-8">
            <a
              href="#hero"
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              About me
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 hover:text-teal-400 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact
            </a>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Terms and Privacy */}
          <div className="text-center text-gray-400 text-sm">
            Terms of Service - Privacy Policy
          </div>
          <p className="text-gray-700 text-sm text-center">
            Hero illustration by{" "}
            <a
              href="https://iconscout.com/contributors/woobrodesign"
              className="text-underline font-size-sm"
            >
              WOOBRO LTD
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
