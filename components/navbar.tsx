import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={("bg-lime-950 fixed w-screen text-white p-3")}>
      <ul className="flex flex-row justify-between sm:px-10" >
        <li>
          <LeftNavElements />
        </li>
        <li>
          <MidNavElements />
        </li>
        <li>
          <RightNavElements />
        </li>
      </ul >
    </nav >
  )
}

function LeftNavElements() {
  return (
    <section className="flex gap-5 items-end">
      <Link href="/" className="flex items-end">
        <Image src="/logo-text.svg"
          className="inline"
          alt="Bolsonext"
          width={484 * (24 / 128)}
          height={128 * (24 / 128)} />
      </Link>
      <Link href="/">Inicio</Link>
    </section>
  )
}

function MidNavElements() {
  return (
    <section>
    </section>
  )
}

function RightNavElements() {
  return (
    <section className="flex gap-5">
      <Link href="/productos">Productos</Link>
      <Link href="/about">Acerca de</Link>
    </section>
  )
}