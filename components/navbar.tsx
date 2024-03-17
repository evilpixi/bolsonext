import Link from "next/link"
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={("bg-orange-600 fixed w-screen text-white text-lg p-3")}>
      <ul className="flex flex-row justify-between sm:px-20">
        <li>
          <LeftNavElements />
        </li>
        <li>
          <MidNavElements />
        </li>
        <li>
          <RightNavElements />
        </li>
      </ul>
    </nav>
  )
}

function LeftNavElements() {
  return (
    <section>
      <Link href="/" className="flex items
      justify-center flex-row font-bold text-xl">
        <Image src="/bolsonext-icon.svg"
          className=""
          alt="Bolsonext Icon"
          width={24}
          height={24} />
        olsonext
      </Link>
    </section>
  )
}

function MidNavElements() {
  return (
    <section>
      <Link href="/productos">Productos</Link>
    </section>
  )
}

function RightNavElements() {
  return (
    <section>
      <Link href="/about">Acerca de</Link>
    </section>
  )
}