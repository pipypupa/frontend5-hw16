import { useRef } from "react";

export const useScrollTo = () => {
  const ref = useRef(null);

  const scrollToRef = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { ref, scrollToRef };
};
