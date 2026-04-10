import { Wifi, Clock } from 'lucide-react';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 bg-white/80 backdrop-blur-sm border-b-2 border-[#80DEEA] z-50 flex items-center justify-between px-6">
      {/* Left: Signal & Username */}
      <div className="flex items-center gap-3">
        <Wifi className="w-5 h-5 text-[#80DEEA]" />
        <div 
          className="text-sm font-semibold tracking-wide"
          style={{
            color: '#80DEEA',
            textShadow: '0 2px 8px rgba(128, 222, 234, 0.4), 0 0 20px rgba(128, 222, 234, 0.3)'
          }}
        >
          ISOLEUCINEDEV
        </div>
      </div>

      {/* Center: Code Symbol */}
      <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border-2 border-[#80DEEA]/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3ca09f" viewBox="0 0 256 256">
          <path d="M32,125.73,80,152v54.84l-43.84-24a8,8,0,0,1-4.16-7ZM176,152v54.84l43.84-24a8,8,0,0,0,4.16-7v-50.1ZM124.16,25l-41,22.46h0L128,72l44.86-24.56L131.84,25A8,8,0,0,0,124.16,25Z" opacity="0.2"></path>
          <path d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path>
        </svg>
      </div>

      {/* Right: Date, Time & Battery */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm hidden md:inline">3/1 (Sun)</span>
        <span className="text-gray-900 font-semibold">01:37</span>
        
        {/* Battery Icon */}
        <div className="flex items-center gap-1">
          <div className="relative w-7 h-4 border-2 border-[#80DEEA] rounded-sm">
            <div className="absolute inset-0.5 bg-[#80DEEA] rounded-sm"></div>
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-2 bg-[#80DEEA] rounded-r-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}