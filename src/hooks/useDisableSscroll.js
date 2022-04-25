import { useEffect } from "react";

export const useDisableScroll = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "auto";
    }
  }, [isOpen]);
};
