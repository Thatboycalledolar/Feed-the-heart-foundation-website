

export default function RecordsCard({ number, score, description }) {
  return(
    <div id="records-card" className="flex flex-col items-center justify-center text-center bg-[#4D4D4D] py-10 rounded-lg w-full max-w-[330px] shadow-lg relative">
      <h4 className="text-[84px] font-bold text-[var(--color-white)] opacity-20 absolute z-[1] top-[5px] left-0 right-0 butt">{number}</h4>
      <h3 className="text-[20px] font-medium text-[var(--color-secondary)] z-10 mt-6">{score}</h3>
      <p className="text-[12px] font-medium text-[var(--color-white)] mt-2">{description}</p>
    </div>
  )
}