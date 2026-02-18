const TimebookLogo = ({ className = "h-8" }: { className?: string }) => (
  <img 
    src="/timebook-logo.png" 
    alt="timebook" 
    className={className}
    style={{ height: '32px', width: 'auto' }}
  />
);

export default TimebookLogo;
