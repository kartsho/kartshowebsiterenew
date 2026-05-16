import { useState } from "react";

const ROICalculator = () => {
  const [members, setMembers] =
    useState(200);

  const [fee, setFee] =
    useState(1500);

  const monthlyRevenue =
    members * fee;

  const yearlyRevenue =
    monthlyRevenue * 12;

  return (
    <div
      className="
      rounded-[32px]

      bg-white/70
      backdrop-blur-3xl

      border
      border-white/40

      p-8
    "
    >
      <h3
        className="
        text-3xl
        font-black
      "
      >
        ROI Calculator
      </h3>

      <div className="mt-8">
        <input
          type="number"
          value={members}
          onChange={(e) =>
            setMembers(
              Number(e.target.value)
            )
          }
          placeholder="Members"
          className="
          w-full

          p-4

          rounded-2xl

          border
        "
        />
      </div>

      <div className="mt-4">
        <input
          type="number"
          value={fee}
          onChange={(e) =>
            setFee(
              Number(e.target.value)
            )
          }
          placeholder="Monthly Fee"
          className="
          w-full

          p-4

          rounded-2xl

          border
        "
        />
      </div>

      <div className="mt-8">
        <h4
          className="
          text-xl
          font-bold
        "
        >
          Monthly Revenue
        </h4>

        <p
          className="
          text-4xl
          font-black

          text-cyan-600
        "
        >
          ₹
          {monthlyRevenue.toLocaleString()}
        </p>
      </div>

      <div className="mt-6">
        <h4
          className="
          text-xl
          font-bold
        "
        >
          Yearly Revenue
        </h4>

        <p
          className="
          text-4xl
          font-black

          text-blue-600
        "
        >
          ₹
          {yearlyRevenue.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;
