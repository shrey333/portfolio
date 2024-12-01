import Head from "next/head";
import NavBar from "../components/navbar";
import Skills from "../components/skills";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills - Shrey Bhadiyadara</title>
        <meta
          name="description"
          content="Technical skills and expertise - Shrey Bhadiyadara"
        />
      </Head>
      <NavBar />
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <Skills />
      </main>
    </>
  );
}
