import { Link } from "react-router-dom";
import logoMark from "../../../assets/logos/Kartsho K.jpeg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="
      group
      inline-flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/5
      px-3
      py-2
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:border-cyan-400/30
      hover:bg-white/10
      hover:shadow-[0_0_30px_rgba(6,182,212,0.14)]
    "
    >
      <span
        className="
        flex
        h-11
        w-11
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-cyan-400/30
        bg-[#08111a]
        shadow-[0_0_0_1px_rgba(34,211,238,0.08)]
      "
      >
        <img
          src={logoMark}
          alt="KartSho logo"
          className="
          h-full
          w-full
          object-cover
        "
        />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className=" text-xl
          tracking-[0.40em]
          font-black
          tracking-[-0.04em]
          bg-gradient-to-r
          from-cyan-300
          via-blue-400
          to-cyan-200
          bg-clip-text
          text-transparent
          flex
          justify-between
          justify-center
        "
        >
          KARTSHO
        </span>

        <span
          className="
         text-[0.5rem]
          uppercase
          tracking-[0.50em]
          text-cyan-500
          font-bold
          text-3xl
        "
        >
        Solutions Pvt. Ltd.
        </span>
      </span>
    </Link>
  );
};

export default Logo;
