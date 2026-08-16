

export default function ExecutiveSum2({ header, description, image }) {
  return (
    <div className="w-full md:max-w-[1200px] flex flex-col items-center text-center gap-6 p-8  md:p-8 md:pr-8 md:gap-8 bg-gray-100 rounded-lg shadow-lg">
      <img src={image} alt="" className="w-full md:h-[500px] lg:h-auto h-full object-cover rounded-lg mb-4 md:mb-8" />
      <div className="flex flex-col w-full md:items-start gap-4">
        <h2 className="text-[36px] md:text-left md:leading-15 md:text-[48px] font-header tracking-tighter text-(--color-black)">{header}</h2>
        <p className="text-[14px] md:text-[16px] md:text-start  md:w-full text-(--color-black) font-medium opacity-70">{description}</p>
      </div>

    </div>
  )
}