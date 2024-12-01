import Head from "next/head";
import NavBar from "../components/navbar";
import Personal from "../components/personal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shrey Bhadiyadara - Software Engineer</title>
        <meta
          name="description"
          content="Shrey Bhadiyadara - Software Engineer specializing in AI/ML, Cloud, and Full Stack Development"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <section className="max-w-3xl px-4 mt-24 sm:mt-40 mx-auto">
        <Personal />
      </section>
    </>
  );
}
