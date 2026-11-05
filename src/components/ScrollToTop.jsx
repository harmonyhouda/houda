import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const location = useLocation();
  const { pathname } = location;
  const lenis = useLenis();

  useEffect(() => {
    // 1. Scroll Logic
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        const timer = setTimeout(() => {
          if (lenis) {
            lenis.scrollTo(el, { 
              offset: -100,
              duration: 2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            const elementPosition = el.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - 100,
              behavior: 'smooth'
            });
          }
        }, 500);
        return () => clearTimeout(timer);
      }
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    // 2. Intersection Observer Logic (for .reveal animations)
    let observer;
    const revealTimer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 600);

    return () => {
      clearTimeout(revealTimer);
      if (observer) observer.disconnect();
    };
  }, [pathname, location.hash, lenis]);

  return null;
};

export default ScrollToTop;
