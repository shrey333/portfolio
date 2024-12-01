import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "../components/page-transition";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen">
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
