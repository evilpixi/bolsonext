import Link from "next/link"
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bolsonet Error (404)"
};

export default function NotFound() {

  return <section>
    <h1>Página no encontrada</h1>

    <Link href="/">Click aquí para volver al inicio</Link>
  </section>
}