import Head from "next/head";
import NavBar from "../components/navbar";
import Contact from "../components/contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - Shrey Bhadiyadara</title>
        <meta
          name="description"
          content="Get in touch with Shrey Bhadiyadara"
        />
      </Head>
      <NavBar />
      <main className="max-w-3xl px-4 mt-16 sm:mt-24 mb-16 sm:mb-32 mx-auto">
        <Contact />
      </main>
    </>
  );
}
