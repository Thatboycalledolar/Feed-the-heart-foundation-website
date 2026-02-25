

export default function ExecutiveSum( { header, description, image } ) {
  return(
    <div className="w-full md:max-w-[1200px] flex flex-col md:flex-row items-center text-center gap-6 p-8  md:p-8 md:pr-8 md:gap-8 bg-gray-100 rounded-lg shadow-lg">
      <img src={image} alt="" className="w-full md:w-[40%] md:h-[250px] h-[200px] object-cover rounded-lg"/>
      <div className="flex flex-col md:items-start">
        <h2 className="text-[36px] md:text-left md:leading-15 md:text-[48px] font-header text-(--color-black)">{header}</h2>
        <p className="text-[12px] md:text-[14px] md:text-start  md:w-full text-(--color-black) font-medium opacity-70">{description}</p>
      </div>
      
    </div>
  )
}