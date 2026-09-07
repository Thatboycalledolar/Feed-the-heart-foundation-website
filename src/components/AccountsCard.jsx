import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function AccountsCard({ accName, accNum, bankName, src }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accNum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-gray-100 p-6 md:py-12 px-12 rounded-lg shadow-md flex flex-col justify-center items-center gap-4 w-full md:flex-row md:justify-between md:items-center">
      <div className="flex flex-col gap-4 mb-16 md:mb-0 py-8">
        <h3 className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">
          Account Number:{" "}
          <span className="flex items-center gap-4">
            <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px]">
              {accNum}
            </span>
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-md hover:bg-gray-200 transition-colors text-gray-600 hover:text-gray-900 cursor-pointer flex items-center gap-1 text-sm"
              title="Copy account number"
              aria-label="Copy account number"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-600" />
                  <span className="text-xs text-green-600 font-medium">Copied!</span>
                </>
              ) : (
                <Copy size={18} />
              )}
            </button>
          </span>
        </h3>
        <p className="text-md text-center flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">
          Account Name:{" "}
          <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px]">
            {accName}
          </span>
        </p>
        <p className="text-md flex flex-col md:flex-row md:justify-start md:gap-2 md:text-lg items-center w-full font-regular text-[var(--color-black)]">
          Bank Name:{" "}
          <span className="text-xl font-medium font-header tracking-tighter text-[var(--color-primary)] text-[28px]">
            {bankName}
          </span>
        </p>
      </div>
      <div className="w-24 md:w-36 flex-shrink-0">
        <img src={src} alt="bank logo" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
}
