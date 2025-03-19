import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // For older browsers (Safari, etc.)
    document.body.scrollTop = 0;
    // For modern browsers
    document.documentElement.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default ScrollToTop;