






function Skills() {
  return (
    <main className="w-full h-full p-10 bg-gray-900 flex flex-col items-center">
    <section className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Skill Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-html5"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">HTML</h2>
            <p className="text-white mt-3 text-center">
                Expert in creating structured, semantic, and accessible web pages using modern HTML standards.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-css3-alt"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">CSS</h2>
            <p className="text-white mt-3 text-center">
                Proficient in responsive design, Flexbox, Grid, and adding animations to enhance user experience.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-js"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">JavaScript</h2>
            <p className="text-white mt-3 text-center">
                Skilled in dynamic and interactive web functionalities using modern JavaScript and ES6+.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-java"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">Java</h2>
            <p className="text-white mt-3 text-center">
                Proficient in object-oriented programming and building robust backend systems with Java.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-python"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">Python</h2>
            <p className="text-white mt-3 text-center">
                Experienced in backend logic, automation scripts, and data processing with Python.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fab fa-flutter"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">Flutter</h2>
            <p className="text-white mt-3 text-center">
                Skilled in building cross-platform mobile applications using Flutter and Dart.
            </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="text-yellow-500 text-4xl mb-4">
                <i className="fas fa-code"></i> {/* Add relevant icon */}
            </div>
            <h2 className="text-2xl font-semibold text-white">C++</h2>
            <p className="text-white mt-3 text-center">
                Expertise in writing performance-critical applications and complex algorithms with C++.
            </p>
        </div>
    </section>
</main>



  )
}

export default Skills