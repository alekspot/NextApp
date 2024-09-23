import { useLayoutEffect, useState } from 'react';

export const useMobile = () => {
  const [isMobile, setMobile] = useState(false);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      const { width } = entry.target.getBoundingClientRect();
      if (width >= 400) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isMobile };
};
