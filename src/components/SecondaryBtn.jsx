

export default function SecondaryBtn({ text }) {
  return (
    <button className="border border-white font-header group text-white font-semibold px-6 py-4 rounded-md hover:bg-white hover:text-[#333333] hover:text-white cursor-pointer text-[14px] md:text-[18px] group">
      <a className="flex gap-2 items-center text-white group-hover:text-(--color-primary) font-medium w-full">{text}</a>
    </button>
  )
}