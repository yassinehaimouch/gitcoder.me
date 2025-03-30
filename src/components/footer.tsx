import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border pt-8 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Connect Column */}
        <div>
          <h3 className="text-xs uppercase tracking-wider font-medium text-secondary mb-4">
            Connect
          </h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            <Link
              href="https://x.com/thegitcoder"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-4 h-4" />
              Twitter
            </Link>

            <Link
              href="https://instagram.com/gitcoder"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-4 h-4" />
              Instagram
            </Link>

            <Link
              href="https://www.linkedin.com/in/yassinehaimouch"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="w-4 h-4" />
              LinkedIn
            </Link>

            <Link
              href="https://github.com/yassinehaimouch"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </Link>
          </div>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="text-xs uppercase tracking-wider font-medium text-secondary mb-4">
            Resources
          </h3>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            <Link
              href="https://www.youtube.com/@thegitcoder"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="w-4 h-4" />
              YouTube
            </Link>

            <Link
              href="https://discord.gg/5TnK7wuzw6"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="w-4 h-4" />
              Discord
            </Link>

            <Link
              href="/articles"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
            >
              <FaFileAlt className="w-4 h-4" />
              Articles
            </Link>

            <Link
              href="mailto:yassinehaimouch@proton.me"
              className="text-sm text-primary hover:text-accent transition-colors duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:text-accent"
            >
              <FaEnvelope className="w-4 h-4" />
              Email
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs mt-20 text-muted">
        © Yassine Haimouch (@gitcoder) — 2025
      </p>
    </footer>
  );
};

export default Footer;
