

export default function ServiceCard({ number,title, description }) {
  return(
    <div id="service-card" className="flex flex-col items-center md:items-start justify-center text-center bg-white p-6 rounded-lg max-w-[330px] h-[200px] shadow-lg">
      <h4 className="text-[14px] font-bold px-4 py-2 rounded-lg bg-[var(--color-secondary)]">{number}</h4>
      <h3 className="text-[16px] font-bold md:text-left text-[var(--color-primary)] mt-6">{title}</h3>
      <p className="text-[10px] md:text-left font-medium text-[var(--color-black)] mt-1">{description}</p>
    </div>
  )
}