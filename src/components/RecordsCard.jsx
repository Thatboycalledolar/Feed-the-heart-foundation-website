

export default function RecordsCard({ number, score, description }) {
  return (
    <div id="records-card" className="flex flex-col items-center justify-center text-center bg-[#4D4D4D] py-10 rounded-lg w-full max-w-[330px] shadow-lg relative">
      <h4 className="text-[84px] font-bold text-[var(--color-white)] opacity-20 absolute z-[1] top-[16px] left-0 right-0">{number}</h4>
      <h3 className="text-[20px] md:text-[28px] font-medium font-header tracking-tighter text-[var(--color-secondary)] z-10 mt-6">{score}</h3>
      <p className="text-[12px] md:text-[16px] font-medium text-[var(--color-white)]/50 mt-2">{description}</p>
    </div>
  )
}