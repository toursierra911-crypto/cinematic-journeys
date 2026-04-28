import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Wait for the page to render before scrolling to the element
      const id = hash.slice(1);
      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          setTimeout(() => tryScroll(attempts + 1), 50);
        }
      };
      tryScroll();
    }
  }, [pathname, hash]);
  return null;
}

const HomePage = lazy(() => import("./pages/HomePage"));
const DestinationsPage = lazy(() => import("./pages/DestinationsPage"));
const DestinationDetailPage = lazy(() => import("./pages/DestinationDetailPage"));
const ToursPage = lazy(() => import("./pages/ToursPage"));
const TourDetailPage = lazy(() => import("./pages/TourDetailPage"));
const PlanATripPage = lazy(() => import("./pages/PlanATripPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:slug" element={<TourDetailPage />} />
          <Route path="/plan-a-trip" element={<PlanATripPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
