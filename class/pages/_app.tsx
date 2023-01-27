// import '../styles/globals.css'
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>app.js에서 작성함!!!!!!!</div>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
      <div>app.js에서 작성함!!!!!!!</div>
    </div>
  );
}

  