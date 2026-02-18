import TimebookLogo from "./TimebookLogo";

const Footer = () => (
  <footer className="border-t border-border/40 py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
      <TimebookLogo className="h-6 text-muted-foreground" />
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Timebook. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
