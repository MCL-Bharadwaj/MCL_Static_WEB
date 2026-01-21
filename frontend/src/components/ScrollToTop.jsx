import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    const isNavigating = prevPathnameRef.current !== pathname;
    
    if (hash && isNavigating) {
      // If there's a hash and we're navigating from a different page, scroll to that element
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // Small delay to ensure the page has rendered
    } else if (!hash && isNavigating) {
      // If no hash and we're navigating, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    // Update the previous pathname
    prevPathnameRef.current = pathname;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
