import { useEffect } from "react";

import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (hash) {
      const targetId = hash.replace("#", "");
      const targetElement = document.getElementById(
        targetId
      );

      if (targetElement) {
        window.requestAnimationFrame(() => {
          targetElement.scrollIntoView({
            behavior: "auto",
            block: "start",
          });
        });

        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
