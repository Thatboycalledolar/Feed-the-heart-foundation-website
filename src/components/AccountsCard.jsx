


export default function AccountsCard({ accName, accNum, bankName }) {
  return(
    <div className="bg-gray-100 p-6 md:py-12 px-18 rounded-lg shadow-md flex flex-col justify-center items-center gap-4 w-full md:w-[80%]">
      <h3 className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">Account Number: <span className="text-xl font-bold ">{accNum}</span></h3>
      <p className="text-md text-center flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg  items-center w-full font-regular text-[var(--color-black)]">Account Name: <span className="text-xl font-bold ">{accName}</span></p>
      <p className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">Bank Name: <span className="text-xl font-bold ">{bankName}</span></p>
    </div>
  )
}