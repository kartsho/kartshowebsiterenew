import { useState } from "react";

const AIPriceEstimator = () => {
  const [users, setUsers] = useState(100);
  const [branches, setBranches] = useState(1);

  const estimate = users * 1200 + branches * 50000;

  return (
    <div
      className="
      rounded-[32px]

      border
      border-white/60

      bg-white/80
      p-8
      sm:p-10

      shadow-[0_20px_80px_rgba(15,23,42,0.08)]
      backdrop-blur-3xl
    "
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
        Smart Pricing
      </p>

      <h3 className="mt-4 text-3xl font-black text-[#0B0F19]">
        AI Pricing Estimator
      </h3>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
        Estimate project scope based on members and branches. It gives a quick reference before a
        detailed proposal is prepared.
      </p>

      <div className="mt-10 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between text-sm font-semibold text-[#0B0F19]">
            <p>Members</p>
            <span className="text-cyan-700">{users}</span>
          </div>

          <input
            type="range"
            min="100"
            max="5000"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="mt-3 w-full accent-cyan-600"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-sm font-semibold text-[#0B0F19]">
            <p>Branches</p>
            <span className="text-cyan-700">{branches}</span>
          </div>

          <input
            type="range"
            min="1"
            max="20"
            value={branches}
            onChange={(e) => setBranches(Number(e.target.value))}
            className="mt-3 w-full accent-cyan-600"
          />
        </div>

        <div className="mt-6 rounded-[24px] bg-gradient-to-r from-cyan-500 to-blue-500 p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Estimated Build Budget
          </p>
          <div className="mt-3 text-4xl font-black sm:text-5xl">
            ₹{estimate.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPriceEstimator;
