import { Settings } from "lucide-react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* Outer gear */}
          <Settings className="w-16 h-16 text-brand-500 animate-spin-slow" />
          {/* Inner gear (counter-rotating) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Settings className="w-8 h-8 text-graphite-400 animate-spin-reverse" />
          </div>
        </div>
        <span className="text-sm font-semibold text-graphite-600 tracking-wide uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
}
