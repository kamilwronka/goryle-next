import { fetchMargonemHtml } from "@/actions/fetch-margonem-html";
import Image from "next/image";

export default async function Home() {
  const html = await fetchMargonemHtml();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {html}
    </main>
  );
}
