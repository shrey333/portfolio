import Head from 'next/head';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Meta({ title, description }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faviconPath = mounted && theme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href={faviconPath} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content={mounted && theme === 'dark' ? '#000000' : '#ffffff'} />
    </Head>
  );
}
