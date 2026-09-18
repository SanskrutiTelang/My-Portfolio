const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">
        <p>
          © {new Date().getFullYear()} SanskrutiTelang. All rights reserved.
        </p>

        <p>
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;