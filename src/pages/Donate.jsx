import AccountsCard from "../components/AccountsCard";


export default function Donate() {
  return (
    <div className="flex flex-col items-center mt-12 md:mt-16 lg:mt-20 mb-30 justify-center gap-12 px-8 md:px-12 w-full md:max-w-[1200px]">
      <div id="header-wrapper" className="flex flex-col items-center md:gap-4 mb-12 md:mb-16 lg:mb-20">
        <h1 className="font-header text-center leading-14 md:leading-20 text-[48px] md:text-[64px] lg:text-[72px] tracking-tighter font-medium mb-4 md:mb-6 lg:mb-8">What you give today <span className="text-[var(--color-primary)]">can change lives Tomorrow</span></h1>
        <p className="text-[var(--color-black)] font-medium text-[14px] text-center md:text-[18px] md:mt-[-10px]">We can’t do this without you, join us in the fight against poverty</p>
      </div>


      <div id="accounts-wrapper" className="flex flex-col items-center justify-center w-full gap-16">
        <div id="naira-wrapper" className="w-full flex flex-col items-center gap-4">
          <h2 className="font-header text-[32px] md:text-[42px] text-(--color-primary) tracking-tighter font-medium">Naira Account Details</h2>
          <div id="naira-accounts" className="w-full flex flex-col items-center gap-8">
            <AccountsCard accName="Feed the Heart Foundation" accNum="1220637968" bankName="Zenith Bank " src="./Zenith-Bank-Logo.webp" />
          </div>
        </div>





      </div>

    </div>

  )
}