const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        
        <div>
          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Sanskruti Telang
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
            DevOps Engineer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build reliable infrastructure, automate deployment pipelines,
            and create scalable cloud environments that help applications
            move from development to production with confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-slate-400">
            <span>☁ Cloud</span>
            <span>⚙ Automation</span>
            <span>🚀 CI/CD</span>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-cyan-500/20 blur-2xl" />

            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="font-mono text-sm leading-8 text-slate-300">
                <p>
                  <span className="text-cyan-400">$</span> whoami
                </p>

                <p className="text-green-400">
                  devops-engineer
                </p>

                <p>
                  <span className="text-cyan-400">$</span> skills
                </p>

                <p className="text-slate-400">
                  Linux | Docker | Kubernetes
                </p>

                <p className="text-slate-400">
                  AWS | Terraform | Jenkins
                </p>

                <p className="text-slate-400">
                  Git | GitHub Actions | CI/CD
                </p>

                <p>
                  <span className="text-cyan-400">$</span> deploy
                </p>

                <p className="text-green-400">
                  Deployment successful ✓
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;