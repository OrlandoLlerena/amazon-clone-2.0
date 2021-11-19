import Head from "next/head";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Amazon Clone 2.0</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Banner companent */}
    </div>
  );
}
