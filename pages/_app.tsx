import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

if (process.env.NODE_ENV === "development") {
  const MockServer = () => import("../src/mocks/worker");
  MockServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
