export default function Personal() {
  const interests = [
    "🏃‍♂️ Hiking Enthusiast",
    "🎧 Music & Coding",
    "📚 Tech Explorer",
  ];

  return (
    <>
      <section>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-2xl sm:text-4xl font-bold">
              Hey, I&rsquo;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Shrey Bhadiyadara
              </span>{" "}
              — Software Engineer
            </p>
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400">
            Crafting AI-powered cloud solutions that scale
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="text-gray-700 dark:text-gray-300">🤖 AI/ML</span>
            <span className="text-gray-700 dark:text-gray-300">☁️ Cloud</span>
            <span className="text-gray-700 dark:text-gray-300">🛠️ DevOps</span>
            <span className="text-gray-700 dark:text-gray-300">
              💻 Full Stack
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <p className="text-gray-600 dark:text-gray-400">
              Beyond coding, I&rsquo;m an avid hiker who finds inspiration in
              nature&rsquo;s patterns. When I&rsquo;m not on the trails,
              you&rsquo;ll find me debugging with my curated playlist — because
              every bug fix deserves its own soundtrack. 🎵
            </p>

            <p className="text-gray-600 dark:text-gray-400">
              I&rsquo;m passionate about staying at the forefront of technology.
              Whether it&rsquo;s exploring the latest AI breakthroughs, cloud
              architectures, or emerging tech trends, I&rsquo;m always eager to
              learn and adapt. 🚀
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
