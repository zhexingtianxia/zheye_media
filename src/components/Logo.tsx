import React from 'react';

export const Logo = ({ className = "h-12", showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Chinese Text Logo with Seal */}
      <div className="flex items-baseline relative">
        <span className="text-3xl md:text-4xl font-serif font-black tracking-widest text-[#1a1a1a] drop-shadow-sm">
          喆也传媒
        </span>
        <div className="absolute -right-6 -bottom-1 w-6 h-6 border-2 border-[#c82e29] rounded-sm flex items-center justify-center opacity-90 rotate-[-2deg]">
          <span className="text-[#c82e29] text-[10px] font-serif font-bold leading-none tracking-tighter">喆也</span>
        </div>
      </div>
      {showText && (
        <div className="flex flex-col justify-center ml-6 border-l border-gray-300 pl-3">
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] leading-none mt-1 uppercase">Zheye</span>
          <span className="text-[10px] font-bold text-gray-400 tracking-[0.3em] leading-none mt-1 uppercase">Media</span>
        </div>
      )}
    </div>
  );
};

