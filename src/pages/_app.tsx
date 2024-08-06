import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "next-themes";
import Layout from "@/components/layouts/Layout";
import { Provider } from "react-redux";
import { store } from "../store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}
