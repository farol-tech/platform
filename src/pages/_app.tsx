import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Ubuntu } from "next/font/google";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500", "700"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Farol</title>
        <meta name="description" content="Somos a Farol. Criamos soluções facilmente integráveis para
  problemas reais, como otimização de rotas de transporte e ordem de processo
  em fábricas, marcação de preços e previsão de estoque." key="title" />
      </Head>
      <main className={ubuntu.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
