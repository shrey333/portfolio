export default function Personal() {
  return (
    <>
      <section>
        <div className="text-left">
          <h2 className="text-8xl sm:text-9xl font-bold animate-move-bg bg-gradient-to-r from-purple-800 via-red-500 to-purple-800 bg-[length:400%] bg-clip-text text-transparent">
            Hi there!
          </h2>
          <h3 className="text-xl sm:text-3xl text-semibold">
            I&apos;m{" "}
            <span className="underline text-bold decoration-gray-900 dark:decoration-gray-300">
              Shrey Bhadiyadara
            </span>
            , a Software Engineer skilled in JavaScript, Python, ReactJS, and
            Django. I enjoy hiking and adventurous activities outside of work.
          </h3>
        </div>
      </section>
    </>
  );
}
