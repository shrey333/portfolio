import Meta from "../components/meta";
import Experience from "../components/experience";
import { ExperienceStructuredData } from "../components/structured-data";
import { EXPERIENCE } from "../data/experience";

export default function ExperiencePage() {
  return (
    <>
      <Meta
        title="Professional Experience - Shrey Bhadiyadara"
        description="Discover my professional journey as a Software Engineer, featuring roles at leading tech companies. Learn about my experience in AI/ML, cloud computing, and full-stack development."
      />
      <ExperienceStructuredData experiences={EXPERIENCE} />
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          My professional journey in software engineering, showcasing roles and
          achievements at various organizations where I&rsquo;ve contributed to
          innovative solutions and technological advancement.
        </p>
        <Experience />
      </main>
    </>
  );
}
