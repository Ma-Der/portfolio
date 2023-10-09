import { useEffect } from "react";

export const useLockBodyScroll = (bool: boolean) => {
  useEffect(() => {
    if (typeof window == 'undefined') {
      return;
    }

    const defaultOverflow = 'visible';

    if (bool) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = defaultOverflow;
    }
  }, [bool]);
};
