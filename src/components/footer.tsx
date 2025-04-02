"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-3xl flex gap-4 flex-col-reverse md:flex-row md:justify-between mt-5 mx-auto">
        <p className="text-xs">
          © Yassine Haimouch (@gitcoder) — {currentYear}
        </p>
        <div className="text-xs">
          <p>
            Built with
            <span className="mx-1 text-accent hover:text-accent/80 transition-colors duration-200">
              Next.js
            </span>
            and
            <span className="mx-1 text-accent hover:text-accent/80 transition-colors duration-200">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
