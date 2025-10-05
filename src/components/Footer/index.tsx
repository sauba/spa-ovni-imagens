import {
  InstagramLogo,
  TrademarkRegistered,
  WhatsappLogo
} from "@phosphor-icons/react"
import Link from "next/link"
import Logo from "../Logo"

export default function Footer() {
  return (
    <footer
      className={`w-full bg-black justify-center items-center text-center min-h-screen`}
      id="contato"
    >
      <div
        className={`flex w-full justify-center items-center text-center text-red-50 min-h-screen gap-10`}
      >
        <div className={`flex flex-col mt-4 font-pt-mono hover:cursor-none`}>
          <span className={`w-full animate-pulse`}>
            <Logo />
          </span>

          <span
            className={`pt-4 pb-4 text-2xl text-zinc-50 tracking-widest flex-wrap`}
          >
            Entre em Contato:
          </span>

          <div className={`flex justify-center items-center gap-6`}>
            <div className={`animate-wiggle`}>
              <span className={`text-rose-400`}>
                <Link
                  href="https://www.instagram.com/ovni_imagens_aereas.lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogo size={48} />
                </Link>
              </span>
            </div>

            <div className={`animate-wiggle`}>
              <span className={`text-green-600`}>
                <Link
                  href="https://wa.me/558187037212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappLogo size={48} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex-col justify-center items-center text-center text-[12px] text-sky-800 mb-1`}
      >
        <span className={`flex justify-center tracking-tighter text-zinc-50`}>
          Developed by Thiago J. de Queiroz. OVNI Imagens Aéreas.
          <TrademarkRegistered size={10} />
          2025 Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}
