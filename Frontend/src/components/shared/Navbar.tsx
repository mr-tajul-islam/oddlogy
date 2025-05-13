"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";

type UserProps = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

export default function Header({
  session,
}: {
  session: { user?: UserProps } | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white py-4 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/logo-transparent.png"
              alt="Oddology Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <button
            title="menu"
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-black transition-all",
                isOpen && "rotate-45 translate-y-1.5"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-6 bg-black my-1.5 transition-all",
                isOpen && "opacity-0"
              )}
            ></span>
            <span
              className={cn(
                "block h-0.5 w-6 bg-black transition-all",
                isOpen && "-rotate-45 -translate-y-1.5"
              )}
            ></span>
          </button>

          <div
            className={cn(
              "flex-col md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 right-0 bg-white p-4 md:p-0 shadow-md md:shadow-none z-50 border-t md:border-t-0 border-gray-200",
              isOpen ? "flex" : "hidden"
            )}
          >
            <Link
              href="/"
              className="text-gray-800 hover:text-[#D2DD27] font-medium"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-gray-800 hover:text-[#D2DD27] font-medium"
            >
              Courses
            </Link>
            <Link
              href="/skills"
              className="text-gray-800 hover:text-[#D2DD27] font-medium"
            >
              Skills
            </Link>
            <Link
              href="/admission"
              className="text-gray-800 hover:text-[#D2DD27] font-medium"
            >
              Admission
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-[#D2DD27] font-medium"
            >
              About Us
            </Link>
            <Link
              href="/support"
              className="text-gray-800 hover:text-[#D2DD27] font-medium md:hidden"
            >
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:01818221949"
              className="text-gray-800 hover:text-[#D2DD27]"
            >
              <span className="flex items-center">
                <i className="fa fa-phone-alt mr-1"></i> 01818221949
              </span>
            </Link>
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-[#D2DD27] text-gray-800 hover:text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}