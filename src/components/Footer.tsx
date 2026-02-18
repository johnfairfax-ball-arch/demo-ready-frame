import { Mail, Linkedin } from "lucide-react";
import TimebookLogo from "./TimebookLogo";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/timebook-inc", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@timebook.net", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <TimebookLogo className="h-8 mb-4" />
            <p className="text-sm text-muted-foreground mb-6 max-w-md">
              From insights, ideas and challenges to validated solutions. Our AI accelerates every stage of product management, helping teams identify the right things to build 10X faster.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-border/40 bg-background/50 hover:bg-accent transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Timebook. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="https://help.timebook.ai/hc/terms-and-policies/your-guide-to-timebook-policies/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="https://help.timebook.ai/hc/terms-and-policies/your-guide-to-timebook-policies/terms-of-service" className="hover:text-foreground transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
