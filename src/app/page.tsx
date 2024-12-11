import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto my-32 px-5">
      <header className="space-y-4">
        <h1 className="sr-only">
          Yassine Haimouch - Software Engineer Portfolio
        </h1>
        <div className="space-y-4">
          <p>
            I am a software engineer specialized in web development, crafting
            modern digital solutions and user-centered experiences.
          </p>
          <p>
            Originally from Morocco, Yassine has worked with various tech
            companies, sharing his knowledge through content creation and public
            speaking. With a passion for building meaningful web experiences, he
            combines technical expertise with creative innovation to shape the
            future of web development.
          </p>
          <p>
            Additionally, he enjoys exploring UI/UX design and creative
            pursuits.
          </p>
          <p>
            In my free time, I pursue my creative interests in{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Cardistry"
              className="text-primary/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardistry
            </Link>{" "}
            and design.
          </p>
        </div>
      </header>

      <main className="space-y-16 mt-16" id="main-content">
        <section aria-labelledby="current-status">
          <h2 id="current-status" className="text-xs text-primary/45">
            Current
          </h2>
          <ul className="space-y-3 mt-3">
            <li className="text-sm">Open to job opportunities</li>
            <li className="text-sm">Public speaker & Content creator</li>
          </ul>
        </section>

        <section aria-labelledby="previous-experience">
          <h2 id="previous-experience" className="text-xs text-primary/45">
            Previous
          </h2>
          <ul className="space-y-3 mt-3">
            <li className="text-sm">
              Senior Frontend Developer at{" "}
              <Link
                href="https://www.codiadev.it/"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codiadev
              </Link>
            </li>
            <li className="text-sm">
              Full-Stack Instructor at{" "}
              <Link
                href="https://gomycode.com/ma/fr/"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoMyCode
              </Link>
            </li>
            <li className="text-sm">
              Frontend Developer at{" "}
              <Link
                href="https://www.blocxs.one/"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blocks BV
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="interviews">
          <h2 id="interviews" className="text-xs text-primary/45">
            Interview and talks
          </h2>
          <ul className="space-y-3 mt-3">
            <li className="text-sm">
              ReactJS Discussion on{" "}
              <Link
                href="https://www.youtube.com/watch?v=7qTAxmutZzE"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xs text-primary/45">
            Find me
          </h2>
          <ul className="space-y-3 mt-3">
            <li className="text-sm">
              I post on{" "}
              <Link
                href="https://x.com/thegitcoder"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </Link>
            </li>
            <li className="text-sm">
              Connect with me on{" "}
              <Link
                href="https://www.linkedin.com/in/yassinehaimouch"
                className="text-primary/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
            <li className="text-sm">
              Send me an{" "}
              <Link
                href="mailto:yassinehaimouch@proton.me"
                className="text-primary/70"
              >
                Email
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-28">
        <p className="text-xs">
          © Yassine Haimouch (@gitcoder) — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
