import Logo from "../Logo";

export default function About() {
  return (
    <div
      className={`
        min-h-screen
        w-full
        flex
        flex-col
        mx-auto
        justify-center
        items-center
       text-slate-50
        font-castoro-titling
      `}
      id="about"
    >
      <span className={`w-full mx-auto flex justify-center items-center animate-pulse`}>
        <Logo />
      </span>
      <p
        className={`
            px-3
            2xl:px-8
            text-4xl
            2xl:text-6xl
            text-center
            tracking-widest
            leading-6
            font-bold
            font-caveat
            animate-wiggle-shrink-slow
          `}
      >
        Site em Desenvolvimento
      </p>
    </div>
  )
}
