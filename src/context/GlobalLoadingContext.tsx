import {
  createContext,
  ReactNode,
  Ref,
  useEffect,
  useRef,
  useState
} from "react";
import { useLocation } from "react-router-dom";

interface GlobalLoadingContextType {
  pageReady: boolean;
  containerRef: Ref<HTMLElement | null>;
}

const GlobalLoadingContext = createContext<
  GlobalLoadingContextType | undefined
>(undefined);

const nextPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

const GlobalLoadingProvider = ({ children }: { children: ReactNode }) => {
  const [allImgsLoaded, setAllImgsLoaded] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // 1) On every route change: reset + start loading
  useEffect(() => {
    setPageReady(false);
    setAllImgsLoaded(false);
  }, [location.key]); // location.key changes on navigation

  // 2) After route paints, check images inside the container
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // Wait until the new route actually rendered into the DOM
      await nextPaint();
      if (cancelled) return;

      const el = containerRef.current;
      if (!el) {
        // // If the page forgot to attach the ref, don’t block forever
        // setAllImgsLoaded(true);
        return;
      }

      const images = Array.from(el.querySelectorAll("img"));

      // IMPORTANT: if you lazy-load thumbnails, you may not want to block on them:
      // const images = Array.from(el.querySelectorAll("img")).filter(img => img.loading !== "lazy");

      if (images.length === 0) {
        setAllImgsLoaded(true);
        return;
      }

      const mark = () => {
        if (cancelled) return;
        const done = images.every((img) => img.complete);
        if (done) setAllImgsLoaded(true);
      };

      // If cached, complete may already be true
      mark();

      images.forEach((img) => {
        if (img.complete) return;
        img.addEventListener("load", mark, { once: true });
        img.addEventListener("error", mark, { once: true });
      });
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [location.key]); // rerun for each navigation

  // 3) Page is ready when images are loaded
  useEffect(() => {
    if (allImgsLoaded) setPageReady(true);
  }, [allImgsLoaded]);

  return (
    <GlobalLoadingContext.Provider value={{ pageReady, containerRef }}>
      {children}
    </GlobalLoadingContext.Provider>
  );
};

export { GlobalLoadingContext, GlobalLoadingProvider };
