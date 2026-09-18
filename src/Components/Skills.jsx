const Skills = () => {
  const skills = [
    {
      title: "DevOps",
      description:
        "CI/CD pipelines, automation, deployment strategies, monitoring, and infrastructure management.",
    },
    {
      title: "Cloud",
      description:
        "Cloud infrastructure, compute, storage, networking, security, and deployment concepts.",
    },
    {
      title: "Linux",
      description:
        "Linux administration, shell environments, permissions, processes, networking, and system management.",
    },
    {
      title: "Containers",
      description:
        "Containerizing applications and managing reproducible application environments.",
    },
    {
      title: "Automation",
      description:
        "Automating repetitive infrastructure and deployment tasks to improve reliability.",
    },
    {
      title: "Version Control",
      description:
        "Git workflows, branching strategies, collaboration, and source code management.",
    },
  ];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            What I bring to the table
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="text-sm font-bold text-cyan-400">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {skill.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;