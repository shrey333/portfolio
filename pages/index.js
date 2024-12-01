import Meta from "../components/meta";
import Personal from "../components/personal";

export default function Home() {
  return (
    <>
      <Meta
        title="Shrey Bhadiyadara - Software Engineer"
        description="Shrey Bhadiyadara - Software Engineer specializing in AI/ML, Cloud, and Full Stack Development"
      />
      <section className="max-w-3xl px-4 mt-24 sm:mt-40 mx-auto">
        <Personal />
      </section>
    </>
  );
}
