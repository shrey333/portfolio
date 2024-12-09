import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Meta({
  title,
  description,
  type = "website",
  twitterHandle = "@shreybb",
  canonicalUrl = "https://shrey.vercel.app",
}) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faviconPath =
    mounted && theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";

  // Generate OG image URL with the title parameter
  const ogImageUrl = `${canonicalUrl}/api/og?title=${encodeURIComponent(
    title
  )}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Shrey Bhadiyadara" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Favicon and Manifest */}
      <link rel="icon" type="image/svg+xml" href={faviconPath} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="theme-color"
        content={mounted && theme === "dark" ? "#000000" : "#ffffff"}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Shrey Bhadiyadara" />
      <meta
        name="keywords"
        content="software engineer, full stack developer, AI/ML engineer, cloud computing, web development, Shrey Bhadiyadara"
      />
    </Head>
  );
}
