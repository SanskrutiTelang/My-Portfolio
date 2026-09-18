const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Turning infrastructure into automation
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-slate-400">
              I am a passionate DevOps Engineer focused on automation,
              cloud infrastructure, continuous integration and continuous
              delivery, containerization, and reliable application deployment.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              I enjoy working at the intersection of development and
              infrastructure, building systems that are scalable,
              reproducible, secure, and easy to maintain.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My goal is to continuously learn modern technologies and use
              automation to simplify complex deployment and infrastructure
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">01</h3>
              <p className="mt-2 text-slate-400">Cloud Infrastructure</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">02</h3>
              <p className="mt-2 text-slate-400">CI/CD Automation</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">03</h3>
              <p className="mt-2 text-slate-400">Containerization</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">04</h3>
              <p className="mt-2 text-slate-400">Infrastructure as Code</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;