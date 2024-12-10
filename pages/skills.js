import Meta from "../components/meta";
import Skills from "../components/skills";
import { SkillsStructuredData } from "../components/structured-data";
import { SKILLS } from "../data/skills";

export default function SkillsPage() {
  return (
    <>
      <Meta
        title="Skills & Expertise - Shrey Bhadiyadara"
        description="Explore my technical skills and expertise in Software Engineering, including AI/ML, Cloud Computing, Full Stack Development, and more. Proficient in various programming languages and frameworks."
      />
      <SkillsStructuredData skills={SKILLS} />
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Skills & Expertise
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-justify">
          A comprehensive overview of my technical skills and areas of expertise
          in software development, artificial intelligence, and cloud
          technologies.
        </p>
        <Skills />
      </main>
    </>
  );
}
