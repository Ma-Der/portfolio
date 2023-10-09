import { useEffect, useState } from "react";

export const useFooterDimensions = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.offsetHeight);
    setWidth(ref.current.offsetWidth);
  }, [ref]);

  return {
    height,
    width,
  };
};
