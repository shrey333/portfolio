import Head from "next/head";
import Contact from "../components/contact";
import Experience from "../components/experience";
import NavBar from "../components/navbar";
import Personal from "../components/personal";
import Project from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shrey</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Full Stack Developer, Engineer and Learner"
        />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Shrey Bhadiyadara" />
        <meta
          property="og:description"
          content="Full Stack Developer, Engineer and Learner"
        />
        <meta
          property="og:title"
          content="Shrey Bhadiyadara : Developer, Engineer"
        />
      </Head>
      <NavBar />
      <section className="max-w-3xl px-4 mt-40 mx-auto">
        <Personal />
        <Experience />
        <Project />
        <Contact />
      </section>
    </>
  );
}
