import dynamic from "next/dynamic";
import Head from "next/head";

const ARViewer = dynamic(() => import("~/components/ARViewer"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.js"/>
      </Head>
      <main className="">
        <h2 className="text-lg">My AR viewer</h2>
        <ARViewer height="500px" />
      </main>
    </>
  );
}
