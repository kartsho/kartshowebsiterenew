import { motion } from "framer-motion";

import {
  MessageCircle,
  Phone,
} from "lucide-react";

const ContactFloatingButtons =
  () => {
    return (
      <div
        className="
        fixed

        bottom-6
        left-6

        z-[9999]

        flex
        flex-col

        gap-4
      "
      >
        {/* ================= WHATSAPP ================= */}

        <motion.a
          href="https://wa.me/+919453134901"
          target="_blank"
          rel="noopener noreferrer"

          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          whileHover={{
            scale: 1.08,
          }}

          whileTap={{
            scale: 0.95,
          }}

          className="
          group

          relative

          w-16
          h-16

          rounded-full

          bg-gradient-to-br
          from-green-400
          to-green-600

          flex
          items-center
          justify-center

          shadow-[0_10px_40px_rgba(34,197,94,0.45)]

          overflow-hidden
        "
        >
          {/* GLOW */}

          <div
            className="
            absolute
            inset-0

            rounded-full

            bg-green-400/40

            blur-2xl

            opacity-0

            group-hover:opacity-100

            transition-all
            duration-500
          "
          />

          {/* ICON */}

          <MessageCircle
            size={30}
            className="
            relative
            z-10

            text-white
          "
          />

          {/* PING */}

          <span
            className="
            absolute

            w-full
            h-full

            rounded-full

            border-4
            border-green-300/40

            animate-ping
          "
          />
        </motion.a>

        {/* ================= CALL ================= */}

        <motion.a
          href="tel:+919453134901"

          initial={{
            opacity: 0,
            scale: 0.7,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          whileHover={{
            scale: 1.08,
          }}

          whileTap={{
            scale: 0.95,
          }}

          className="
          group

          relative

          w-16
          h-16

          rounded-full

          bg-gradient-to-br
          from-cyan-500
          to-blue-600

          flex
          items-center
          justify-center

          shadow-[0_10px_40px_rgba(6,182,212,0.45)]

          overflow-hidden
        "
        >
          {/* GLOW */}

          <div
            className="
            absolute
            inset-0

            rounded-full

            bg-cyan-400/40

            blur-2xl

            opacity-0

            group-hover:opacity-100

            transition-all
            duration-500
          "
          />

          {/* ICON */}

          <Phone
            size={28}
            className="
            relative
            z-10

            text-white
          "
          />

          {/* PING */}

          <span
            className="
            absolute

            w-full
            h-full

            rounded-full

            border-4
            border-cyan-300/40

            animate-ping
          "
          />
        </motion.a>
      </div>
    );
  };

export default ContactFloatingButtons;