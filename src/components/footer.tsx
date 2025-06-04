"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-3xl flex gap-4 flex-col-reverse md:flex-row md:justify-between mt-5 mx-auto">
        <p className="text-xs">© Yassine H. (@gitcoder) — {currentYear}</p>
        <div className="text-xs flex gap-4">
          <Link
            target="_blank"
            className="text-accent flex items-center gap-2 hover:text-accent/80 duration-300"
            href="https://www.instagram.com/gitcoder"
          >
            <GoArrowUpRight />
            Instagram
          </Link>
          <Link
            className="text-accent flex items-center gap-2 hover:text-accent/80 duration-300"
            href="mailto:yassinehaimouch@proton.me"
          >
            <GoArrowUpRight />
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
