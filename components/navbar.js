import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  const isActive = (path) => router.pathname === path;

  const navItems = [
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.2,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <nav className="sticky-nav !top-2 sm:!top-4 mt-2 sm:mt-4 rounded-xl sm:rounded-2xl flex justify-between items-center content-center max-w-4xl w-[calc(100%-1rem)] sm:w-full p-2 px-4 mx-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800">
        <motion.div
          className="tracking-tighter text-2xl sm:text-3xl font-black text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">SB</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-base sm:text-xl justify-content-center content-center items-center">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`px-1 sm:px-4 ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <div className="mr-2">
            <ThemeToggle />
          </div>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-900 dark:text-gray-100"
            aria-label="Toggle Menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="md:hidden fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 z-50 shadow-xl"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="p-4">
                <div className="flex justify-end mb-6">
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 rounded-lg ${
                          isActive(item.href)
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        } transition-colors`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
