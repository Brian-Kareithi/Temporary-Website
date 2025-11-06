"use client";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="text-center text-white">
        {/* Loading Text */}
        <h1 className="text-2xl font-light mb-6 text-gray-100">
          Loading...
        </h1>

        {/* Simple Loading Animation */}
        <div className="flex justify-center items-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;