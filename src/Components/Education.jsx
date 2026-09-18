const Education = () => {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My Academic Journey
          </h2>
        </div>

        <div className="relative border-l border-slate-700 pl-8">
          <div className="relative pb-12">
            <div className="absolute -left-[41px] h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400" />

            <p className="text-sm font-semibold text-cyan-400">
              2022 - 2026
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Bachelor of Technology
            </h3>

            <p className="mt-2 text-lg text-slate-400">
              Computer Science & Engineering
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Focused on software development, operating systems, computer
              networks, databases, cloud computing, and modern infrastructure
              technologies.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400" />

            <p className="text-sm font-semibold text-cyan-400">
              Continuous Learning
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              DevOps & Cloud Technologies
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Continuously developing practical skills through hands-on
              projects, cloud platforms, automation, containerization,
              infrastructure as code, and CI/CD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;