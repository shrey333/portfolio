import { PROJECTS } from "../data/projects";

export default function Project() {
  return (
    <>
      <section
        id="projects"
        className="my-8 sm:my-20 pb-16 sm:pb-32 scroll-mt-24 sm:scroll-mt-32"
      >
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-shadow-metallic-light dark:text-shadow-metallic-dark">
            Projects
          </h2>
        </div>
        <div className="space-y-4 sm:space-y-5">
          {PROJECTS.map((project, index) => {
            return (
              <div
                key={project.projectLink || `project-${index}`}
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {project.projectName}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                  {project.projectDescription}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.projectTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1 rounded-lg text-sm bg-gray-100 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/shrey333?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            More on GitHub
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
