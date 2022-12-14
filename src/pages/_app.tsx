import "../styles/globals.scss";
import type { AppProps } from "next/app";

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") import("../mocks/msw");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
