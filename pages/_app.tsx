import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThumbsProvider } from "contexts/thumbs.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThumbsProvider>
      <Component {...pageProps} />
    </ThumbsProvider>
  );
}
export default MyApp;
