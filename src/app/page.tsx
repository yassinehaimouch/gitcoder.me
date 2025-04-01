import Link from "next/link";
import Image from "next/image";
import { projects } from "@/utils/constants";

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
            <ul className="space-y-3 border-l border-border pl-5">
              <li className="text-sm text-primary relative">
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
                Open to job opportunities
              </li>
              <li className="text-sm text-primary relative">
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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
            <ul className="space-y-3 border-l border-border pl-5">
              <li className="text-sm text-primary relative">
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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
                <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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

        <section aria-labelledby="projects" className="relative">
          <h2
            id="projects"
            className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
          >
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-border-hover transition-colors duration-300"
              >
                <div className="aspect-video w-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-primary font-medium mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="text-xs px-2 py-0.5 bg-border text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href={project.demoLink}
                      className="text-sm text-accent hover:text-accent/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="text-sm text-primary hover:text-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section aria-labelledby="interviews" className="relative">
          <h2
            id="interviews"
            className="text-xs uppercase tracking-wider font-medium text-secondary mb-4"
          >
            Interview and talks
          </h2>
          <ul className="space-y-3 border-l border-border pl-5">
            <li className="text-sm text-primary relative">
              <span className="absolute w-1.5 h-1.5 bg-accent rounded-full -left-[26px] top-1.5"></span>
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
