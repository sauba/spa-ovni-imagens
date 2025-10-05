import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/logo.svg"

export default function Logo() {
  return (
    <span>
      <Link href={"https://ovniimagens.com.br"}>
        <Image
          src={logo}
          width={512}
          height={512}
          alt="OVNI Imagens aéreas"
          priority
        />
      </Link>
    </span>
  )
}
