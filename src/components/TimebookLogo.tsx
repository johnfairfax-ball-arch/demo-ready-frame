const TimebookLogo = ({ className = "h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="24"
      y="21"
      fontFamily="Inter, system-ui, sans-serif"
      fontWeight="900"
      fontSize="22"
      fill="currentColor"
      letterSpacing="-0.02em"
    >
      timebook
    </text>
    {/* Arrow logomark inspired by brand — two chevrons */}
    <path d="M2 7L10 14L2 21" stroke="hsl(14, 100%, 64%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 7L18 14L10 21" stroke="hsl(14, 100%, 64%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default TimebookLogo;
