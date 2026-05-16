const CurrencyToggle = ({ currency, setCurrency }) => {
  return (
    <div
      className="
      mt-10

      inline-flex
      items-center
      gap-2

      rounded-2xl

      border
      border-black/5

      bg-white/80
      px-2
      py-2

      shadow-[0_10px_40px_rgba(15,23,42,0.08)]
      backdrop-blur-2xl
    "
    >
      {["INR", "USD"].map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => setCurrency(key)}
          className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 ${
            currency === key
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_10px_30px_rgba(6,182,212,0.25)]"
              : "text-gray-600 hover:bg-black/[0.03] hover:text-[#0B0F19]"
          }`}
        >
          {key === "INR" ? "₹ INR" : "$ USD"}
        </button>
      ))}
    </div>
  );
};

export default CurrencyToggle;
