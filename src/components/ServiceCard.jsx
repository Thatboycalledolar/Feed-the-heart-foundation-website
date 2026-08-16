

export default function ServiceCard({ number, title, description }) {
  return (
    <div id="service-card" className="flex flex-col items-center md:items-start justify-center md:justify-start text-center bg-white p-6 rounded-lg w-[80%] md:w-[60%] h-[200px] shadow-lg">
      <h4 className="text-[14px] md:text-[18px] font-bold px-4 py-2 rounded-lg bg-[var(--color-secondary)]">{number}</h4>
      <h3 className="text-[16px] md:text-[20px] font-medium md:text-left text-[var(--color-primary)] mt-6 font-header tracking-tighter">{title}</h3>
      <p className="text-[12px] md:text-[14px] md:text-left font-medium text-[var(--color-black)]/60 leading-snug mt-1">{description}</p>
    </div>
  )
}