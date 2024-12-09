import Meta from "../components/meta";
import Projects from "../components/projects";
import { ProjectsStructuredData } from "../components/structured-data";
import { PROJECTS } from "../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Meta
        title="Projects & Applications - Shrey Bhadiyadara"
        description="Explore my portfolio of innovative software projects, including AI/ML applications, web development, and cloud solutions. Each project demonstrates my technical expertise and problem-solving abilities."
      />
      <ProjectsStructuredData projects={PROJECTS} />
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Projects & Applications
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          A showcase of my software development projects, featuring innovative solutions
          in artificial intelligence, web development, and cloud computing.
        </p>
        <Projects />
      </main>
    </>
  );
}
