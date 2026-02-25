import { Globe, Instagram, Mail, PhoneCall } from "lucide-react"

export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-4 mb-30 justify-center gap-12 px-8 md:px-12 w-full md:max-w-[1200px]">
      <div id="header-wrapper" className="flex flex-col items-center md:gap-4">
        <h1 className="font-header text-center leading-14 md:leading-20 text-[48px] md:text-[76px] ">get more information or <br />volunteer with us</h1>
        <p className="text-[var(--color-black)] font-medium text-[14px] text-center md:text-[18px] md:mt-[-10px]">Need more information, want to    volunteer or partner with us? <br /> Here are different ways you can reach us.</p>
      </div>

      <div id="contact-info" className="flex flex-col items-center justify-center w-full bg-gray-100 py-12 px-8 rounded-2xl gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className=" p-3 bg-(--color-secondary) rounded-lg shadow-lg"><Mail width={25} height={25} /></div>
          <a href="mailto:ffeedtheheart@gmail.com" className="md:hover:underline md:no-underline underline underline-offset-3 text-(--color-primary) font-semibold md:text-xl">ffeedtheheart@gmail.com</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className=" p-3 bg-(--color-secondary) rounded-lg shadow-lg"><PhoneCall width={25} height={25} /></div>
          <a href="tel:+2348061784887" className="md:hover:underline md:no-underline underline underline-offset-3 text-(--color-primary) font-semibold md:text-xl">+234 806 178 4887</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className=" p-3 bg-(--color-secondary) rounded-lg shadow-lg"><Globe width={25} height={25} /></div>
          <a href="https://www.feedtheheartfoundation.com" target="blank" className="md:hover:underline md:no-underline underline underline-offset-3 text-(--color-primary) font-semibold md:text-xl">Feedtheheartfoundation.com</a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className=" p-3 bg-(--color-secondary) rounded-lg shadow-lg"><Instagram  width={25} height={25} /></div>
          <a href="https://www.instagram.com/feed_the_heart_foundation/" target="blank" className="md:hover:underline md:no-underline underline underline-offset-3 text-(--color-primary) font-semibold md:text-xl">feed_the_heart_foundation</a>
        </div>
      </div>

    </div>
  )
}