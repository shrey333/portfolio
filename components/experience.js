import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <>
      <section id="experience" className="my-8 sm:my-20 pb-16 sm:pb-32 scroll-mt-24 sm:scroll-mt-32">
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-shadow-metallic-light dark:text-shadow-metallic-dark">
            Experience
          </h2>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {EXPERIENCE.map((experience) => (
            <div
              key={experience.companyName}
              className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {experience.companyName}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                {experience.companyDescription.map((description, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    {description}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {experience.companyTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100"
                  >
                    {tech}
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
