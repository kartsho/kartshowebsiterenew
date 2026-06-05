import { useState } from "react";

const AIPriceEstimator = () => {
  const [users, setUsers] =
    useState(100);

  const [ai, setAi] =
    useState(false);

  const [app, setApp] =
    useState(false);

  const calculatePrice = () => {
    let base = 70000;

    if (users > 500)
      base += 80000;

    if (users > 1000)
      base += 150000;

    if (ai) base += 120000;

    if (app) base += 180000;

    return base;
  };

  return (
    <div
      className="
      rounded-[32px]

      bg-white/70
      backdrop-blur-3xl

      border
      border-white/40

      p-8

      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    "
    >
      <h3
        className="
        text-3xl
        font-black

        text-[#0B0F19]
      "
      >
        AI Pricing Estimator
      </h3>

      <div className="mt-8">
        <label
          className="
          text-sm
          font-semibold
        "
        >
          Members
        </label>

        <input
          type="range"
          min="100"
          max="5000"
          value={users}
          onChange={(e) =>
            setUsers(e.target.value)
          }
          className="w-full mt-3"
        />

        <p className="mt-2">
          {users} Members
        </p>
      </div>

      <div
        className="
        mt-6

        flex
        flex-col

        gap-4
      "
      >
        <label>
          <input
            type="checkbox"
            checked={ai}
            onChange={() =>
              setAi(!ai)
            }
          />{" "}
          AI Features
        </label>

        <label>
          <input
            type="checkbox"
            checked={app}
            onChange={() =>
              setApp(!app)
            }
          />{" "}
          Mobile App
        </label>
      </div>

      <div
        className="
        mt-10

        text-5xl
        font-black

        text-cyan-600
      "
      >
        ₹
        {calculatePrice().toLocaleString()}
      </div>
    </div>
  );
};

export default AIPriceEstimator;
