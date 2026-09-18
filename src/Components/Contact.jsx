const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-9xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let's build something reliable
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you have an exciting project, a DevOps opportunity,
            or simply want to connect, I'd love to hear from you.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            <a
              href="mailto:your.email@example.com"
              className="rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-cyan-400">
                sanskrutitelang740@gmail.com
              </p>
            </a>

            <a
              className="rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-slate-500">Contact Number</p>
              <p className="mt-2 text-cyan-400">
                +91-7709398279
              </p>
            </a>

            <a
              href="https://github.com/SanskrutiTelang"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-slate-500">GitHub</p>
              <p className="mt-2 text-cyan-400">
                https://github.com/SanskrutiTelang
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/sanskruti-telang-0b6318277/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-cyan-400/50"
            >
              <p className="text-sm text-slate-500">LinkedIn</p>
              <p className="mt-2 text-cyan-400">
                https://www.linkedin.com/in/sanskruti-telang-0b6318277/
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;