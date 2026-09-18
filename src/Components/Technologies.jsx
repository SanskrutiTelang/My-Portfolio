const Technologies = () => {
  const technologies = [
    "Linux",
    "Git",
    "GitHub",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "AWS",
    "Terraform",
    "Ansible",
    "Python",
    "Bash",
    "Nginx",
    "Prometheus",
    "Grafana",
    "MySQL",
    "ReactJs",
    "Ui/Ux Designing",
  ];

  return (
    <section id="technologies" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technologies
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            My Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Technologies and tools I use to build, automate, deploy, and
            maintain modern applications and infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;