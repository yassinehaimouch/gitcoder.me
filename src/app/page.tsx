import Link from "next/link";
import { projects } from "@/utils/constants";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-16 md:mt-24 mb-16">
      <header className="relative mb-16">
        <h1 className="sr-only">
          Yassine Haimouch - Software Engineer Portfolio
        </h1>
        <div className="space-y-4 text-primary">
          <p className="text-xl md:leading-10 md:text-[28px] font-bold">
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
              className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cardistry
            </Link>{" "}
            and design.
          </p>
        </div>
      </header>

      <main className="space-y-16" id="main-content">
        <div className="flex flex-col md:flex-row md:gap-10 mb-16">
          {/* Current Section */}
          <section
            aria-labelledby="current-status"
            className="relative flex-1 mb-16 md:mb-0"
          >
            <h2
              id="current-status"
              className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
            >
              Current
            </h2>
            <ul className="space-y-3 list-disc pl-4">
              <li className="text-sm text-primary relative">
                Open to job opportunities
              </li>
              <li className="text-sm text-primary relative">
                Creator of{" "}
                <Link
                  href="https://gitcoders.dev/"
                  className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gitcoders.dev
                </Link>
              </li>
              <li className="text-sm text-primary relative">
                Public speaker & Content creator
              </li>
            </ul>
          </section>

          {/* Previous Section */}
          <section
            aria-labelledby="previous-experience"
            className="relative flex-1"
          >
            <h2
              id="previous-experience"
              className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
            >
              Previous
            </h2>
            <ul className="space-y-3 list-disc pl-4">
              <li className="text-sm text-primary relative">
                Senior Frontend Developer at{" "}
                <Link
                  href="https://www.codiadev.it/"
                  className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codiadev
                </Link>
              </li>
              <li className="text-sm text-primary relative">
                Full-Stack Instructor at{" "}
                <Link
                  href="https://gomycode.com/ma/fr/"
                  className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GoMyCode
                </Link>
              </li>
              <li className="text-sm text-primary relative">
                Frontend Developer at{" "}
                <Link
                  href="https://www.blocxs.one/"
                  className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blocks BV
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Updated Projects Section */}
        <section
          aria-labelledby="projects"
          className="relative -mb-3 mt-16 sm:mt-32"
        >
          <h2
            id="previous-experience"
            className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
          >
            Projects
          </h2>
          <div className="space-y-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-md text-sm hover:bg-accent/10 p-2"
              >
                <div className="flex items-center gap-1 text-accent">
                  <span className="uppercase">{project.title}</span>
                  <GoArrowUpRight />
                </div>

                <span>{project.description}</span>
              </Link>
            ))}
          </div>
        </section>
        {/* Interviews Section */}
        <section aria-labelledby="interviews" className="relative">
          <h2
            id="interviews"
            className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
          >
            Interview and talks
          </h2>
          <ul className="space-y-3 list-disc pl-4">
            <li className="text-sm text-primary relative">
              ReactJS Discussion on{" "}
              <Link
                href="https://www.youtube.com/watch?v=7qTAxmutZzE"
                className="text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
