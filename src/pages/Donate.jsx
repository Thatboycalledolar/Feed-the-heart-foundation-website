import AccountsCard from "../components/AccountsCard";


export default function Donate() {
  return (
    <div className="flex flex-col items-center mt-4 mb-30 justify-center gap-12 px-8 md:px-12 w-full md:max-w-[1200px]">
      <div id="header-wrapper" className="flex flex-col items-center md:gap-4">
        <h1 className="font-header text-center leading-14 md:leading-20 text-[48px] md:text-[76px] ">what you donate today,
        creates <span className="text-[var(--color-primary)]">a brighter tomorrow</span></h1>
        <p className="text-[var(--color-black)] font-medium text-[14px] text-center md:text-[18px] md:mt-[-10px]">We can’t do this without you, join us in the fight against poverty</p>
      </div>
      

      <div id="accounts-wrapper" className="flex flex-col items-center justify-center w-full gap-16">
        <div id="naira-wrapper" className="w-full flex flex-col items-center gap-4">
           <h2 className="font-header text-[32px] md:text-[42px] text-(--color-primary)">Naira Account Details</h2>
            <div id="naira-accounts" className="w-full flex flex-col items-center gap-8">
              <AccountsCard accName="Feed the Heart Foundation" accNum="1220637968" bankName="Zenith Bank " />  
            </div>
        </div>
        
        
       
       
        
      </div>

    </div>

  )
}