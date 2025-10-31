function Background({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Darker gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>

      {/* Red gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, rgba(80, 0, 0, 0.15) 0%, rgba(40, 0, 0, 0.3) 100%)',
        }}
      ></div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Chap yuqoridagi yorqin nuqta */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#ae00ed] opacity-20 blur-[80px]"></div>

      {/* Chap tomondan sekin ochiluvchi gradient */}
      <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-0"></div>

      {/* O'ng tomondan sekin ochiluvchi gradient */}
      <div className="absolute top-0 right-0 h-full w-[15%] bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-0"></div>

      {/* Kontent uchun */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default Background
