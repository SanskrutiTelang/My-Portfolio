const Projects = () => {
  const projects = [
    {
      title: "Cloud Deployment Automation",
      description:
        "Designed an automated deployment workflow that builds, tests, containerizes, and deploys applications using a CI/CD pipeline.",
      technologies: ["Docker", "GitHub Actions", "AWS", "Linux"],
    },
    {
      title: "Containerized Application",
      description:
        "Containerized a multi-service application and created a repeatable environment for development and production deployment.",
      technologies: ["Docker", "Docker Compose", "Linux"],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automated cloud infrastructure provisioning using Infrastructure as Code principles to create consistent and reproducible environments.",
      technologies: ["Terraform", "AWS", "Git"],
    },
  ];

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Things I've built
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                &lt;/&gt;
              </div>

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <button className="mt-7 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;