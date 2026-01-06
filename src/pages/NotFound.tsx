import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-white">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-amber-900">Page Not Found</h1>
        <p className="text-lg text-amber-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-amber-600 mb-8">
          The requested route "{location.pathname}" could not be found.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium rounded-lg shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all"
        >
          Return to TeaWise Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
