


export default function AccountsCard({ accName, accNum, bankName, src }) {
  return (
    <div className="bg-gray-100 p-6 md:py-12 px-12 rounded-lg shadow-md flex flex-col justify-center items-center gap-4 w-full md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col  gap-4 mb-16 md:mb-0 py-8">
        <h3 className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">Account Number: <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px] ">{accNum}</span></h3>
        <p className="text-md text-center flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg  items-center w-full font-regular text-[var(--color-black)]">Account Name: <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px] ">{accName}</span></p>
        <p className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">Bank Name: <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px] ">{bankName}</span></p>
      </div>
      <div className="w-24 md:w-36 flex-shrink-0">
        <img src={src} alt="bank logo" className="w-full h-full object-cover rounded-lg " />
      </div>

    </div>
  )
}