import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bolsonext - Acerca de"
};

export default function AboutPage() {
  return (
    <main className="">
      <h1>Acerca de Bolsonext</h1>

      bolsonext es una app que te permite adquiirir bolsones de manera facil y barata.
    </main>
  )
}
