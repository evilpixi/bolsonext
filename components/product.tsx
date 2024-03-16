"use client"
import Link from "next/link"

export default function Product({ data }) {
  return (
    <section>
      {data.id}. {data.name}
      <button>
        Comprar
      </button>
    </section>
  )
}