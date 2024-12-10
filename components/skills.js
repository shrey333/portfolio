import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="my-8 sm:my-20 pb-16 sm:pb-32 scroll-mt-24 sm:scroll-mt-32"
      >
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-shadow-metallic-light dark:text-shadow-metallic-dark">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {SKILLS.map((skillCategory) => (
            <div
              key={skillCategory.category}
              className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">
                <span className="mr-2">{skillCategory.emoji}</span>
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skillCategory.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1 rounded-lg text-sm sm:text-base bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
