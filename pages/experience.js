import Head from "next/head";
import Experience from "../components/experience";

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience - Shrey Bhadiyadara</title>
        <meta
          name="description"
          content="Professional experience and work history - Shrey Bhadiyadara"
        />
      </Head>
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <Experience />
      </main>
    </>
  );
}
