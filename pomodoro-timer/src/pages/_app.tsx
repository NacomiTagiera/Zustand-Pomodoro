import { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Pomodoro Timer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Project created with the purpose of learning the fundamentals of Zustand."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='80'>🍅</text></svg>"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
