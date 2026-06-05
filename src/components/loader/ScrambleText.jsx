import { useEffect, useState } from "react";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrambleText = ({ text }) => {
  const [display, setDisplay] =
    useState("");

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplay(() =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }

            return letters[
              Math.floor(
                Math.random() *
                  letters.length
              )
            ];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, 40);

    return () =>
      clearInterval(interval);
  }, [text]);

  return (
    <h1
      className="
      text-2xl
      md:text-3xl

      font-black

      tracking-[0.3em]

      text-white
    "
    >
      {display}
    </h1>
  );
};

export default ScrambleText;