import Head from "next/head";
import Projects from "../components/projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects - Shrey Bhadiyadara</title>
        <meta
          name="description"
          content="Portfolio of projects and applications - Shrey Bhadiyadara"
        />
      </Head>
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <Projects />
      </main>
    </>
  );
}
