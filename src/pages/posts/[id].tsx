import Head from "next/head";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Post: {router.query.id}</title>
        <meta
          name="description"
          content={`Teste de página dinamica - Post ${router.query.id}`}
        />
      </Head>
      <p>Post: {router.query.id}</p>
    </>
  );
}
