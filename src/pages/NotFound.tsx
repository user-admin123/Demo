import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center py-32">
      <div className="text-center">
        <h1 className="heading-xl text-foreground mb-4">404</h1>
        <p className="text-body mb-6">Oops! This page doesn't exist.</p>
        <a href="/" className="text-primary underline hover:text-accent transition-colors font-body">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
