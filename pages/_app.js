import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "../components/page-transition";
import NavBar from "../components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div
        className={`${GeistSans.className} ${GeistMono.className} min-h-screen`}
      >
        <NavBar />
        <main>
          <PageTransition>
            <Component {...pageProps} />
          </PageTransition>
        </main>
      </div>
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
