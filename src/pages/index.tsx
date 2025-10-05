import About from "@/components/About"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "OVNI Imagens Aéreas.LAB",
  description: "This is the Carlos Alberto da Nobrega Cavalcanti Jr Drone Services website.",
}

export default function Home() {
  return (
    <main
      className={`
      flex
      flex-col
      w-full
      min-h-screen
      items-center
      justify-center
      bg-black
      `}
    >
      <Header />
      <About />
      <Footer />
    </main>
  )
}
