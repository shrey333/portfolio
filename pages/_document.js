import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="bg-white dark:bg-black text-dark dark:text-white absolute inset-0 -z-10 size-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] h-screen w-screen dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
