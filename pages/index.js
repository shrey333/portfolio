import Head from "next/head";
import Contact from "../components/contact";
import Experience from "../components/experience";
import NavBar from "../components/navbar";
import Personal from "../components/personal";
import Project from "../components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shrey</title>
        <meta name="robots" content="follow, index" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23000000%22></rect><path d=%22M46.23 37.79L29.23 37.79Q28.97 34.60 26.84 32.81Q24.72 31.02 20.40 31.02L20.40 31.02Q17.66 31.02 15.91 31.67Q14.17 32.33 13.34 33.44Q12.51 34.56 12.48 36.00L12.48 36.00Q12.41 37.18 12.91 38.13Q13.41 39.07 14.49 39.82Q15.58 40.57 17.27 41.18Q18.97 41.79 21.30 42.27L21.30 42.27L26.67 43.42Q32.10 44.57 35.97 46.45Q39.84 48.34 42.30 50.88Q44.76 53.42 45.93 56.58Q47.09 59.75 47.12 63.49L47.12 63.49Q47.09 69.94 43.90 74.42Q40.70 78.89 34.77 81.23Q28.84 83.56 20.53 83.56L20.53 83.56Q12.00 83.56 5.66 81.03Q-0.69 78.51-4.19 73.25Q-7.69 67.99-7.72 59.78L-7.72 59.78L9.15 59.78Q9.31 62.78 10.66 64.83Q12.00 66.87 14.44 67.93Q16.89 68.98 20.28 68.98L20.28 68.98Q23.12 68.98 25.04 68.28Q26.96 67.58 27.95 66.33Q28.94 65.09 28.97 63.49L28.97 63.49Q28.94 61.99 28.00 60.85Q27.05 59.72 24.91 58.81Q22.77 57.89 19.13 57.10L19.13 57.10L12.61 55.69Q3.91 53.80-1.09 49.38Q-6.09 44.95-6.06 37.28L-6.06 37.28Q-6.09 31.05-2.72 26.37Q0.65 21.68 6.65 19.06Q12.64 16.44 20.40 16.44L20.40 16.44Q28.33 16.44 34.12 19.09Q39.90 21.75 43.05 26.56Q46.20 31.37 46.23 37.79L46.23 37.79ZM84.71 82.79L53.90 82.79L53.90 17.34L82.28 17.34Q89.76 17.34 94.86 19.35Q99.95 21.36 102.56 25.04Q105.16 28.71 105.16 33.70L105.16 33.70Q105.16 37.31 103.58 40.28Q102.00 43.26 99.15 45.25Q96.31 47.25 92.51 48.02L92.51 48.02L92.51 48.66Q96.73 48.82 100.18 50.78Q103.63 52.75 105.67 56.18Q107.72 59.62 107.72 64.25L107.72 64.25Q107.72 69.62 104.92 73.81Q102.13 78.00 96.98 80.39Q91.84 82.79 84.71 82.79L84.71 82.79ZM71.67 54.79L71.67 68.60L79.98 68.60Q84.45 68.60 86.69 66.92Q88.93 65.25 88.93 61.95L88.93 61.95Q88.93 59.65 87.87 58.05Q86.82 56.46 84.88 55.62Q82.95 54.79 80.23 54.79L80.23 54.79L71.67 54.79ZM71.67 31.27L71.67 43.80L78.96 43.80Q81.29 43.80 83.08 43.06Q84.87 42.33 85.88 40.94Q86.88 39.55 86.88 37.54L86.88 37.54Q86.88 34.50 84.71 32.89Q82.54 31.27 79.21 31.27L79.21 31.27L71.67 31.27Z%22 fill=%22%23fff%22></path></svg>"
        />
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
