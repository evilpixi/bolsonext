import Link from "next/link"

export default function Navbar() {
  return (
    <nav className={("text-teal-500 bg-black p-3")}>
      <ul className="flex flex-row gap-10">
        <li>
          <Link href="/">Bolsonext</Link>
        </li>
        <li>
          <Link href="/productos">Productos</Link>
        </li>
        <li>
          <Link href="/about">Acerca de</Link>
        </li>
      </ul>
    </nav>
  )
}