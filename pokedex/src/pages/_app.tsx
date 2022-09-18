import "../styles/globals.scss";
import type { AppProps } from "next/app";

console.log(process.env.NEXT_PUBLIC_API_MOCKING);

if (process.env.NEXT_PUBLIC_API_MOCKING === "true") import("../mocks/msw");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
