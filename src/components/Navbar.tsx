import TimebookLogo from "./TimebookLogo";

const DEMO_URL = "http://early-access.timebook.ai/book_a_demo";
const SIGNUP_URL = "https://app.timebook.net/login/signup";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
    <div className="container flex h-16 items-center justify-between">
      <TimebookLogo />
      <div className="flex items-center gap-3">
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
        >
          Book a Demo
        </a>
        <a
          href={SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg bg-gradient-coral px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get Early Access
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
