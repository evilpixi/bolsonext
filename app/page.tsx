import fonts from "./fonts"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-lime-800 sm:items-center sm:flex sm:flex-col">
      <h1 className="text-white text-7xl sm:pt-20 pt-10 sm:pl-20 pl-0">
        <Image src="/logo-text.svg"
          className="inline"
          alt="Bolsonext Icon"
          width={484}
          height={128} />
      </h1>
      <h2 className={"sm:text-6xl sm:pt-20 sm:pl-20 pl-0 text-xl text-white "
        + fonts.patrick.className}>
        Facilidad y ahorro<br />van de la mano
      </h2>
      <Image src="/bolson.svg"
        alt="Bolsonext Icon"
        width={300}
        height={300}
      />
    </main>
  )
}
