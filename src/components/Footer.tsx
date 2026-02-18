import { useState } from "react";
import { ChevronUp, ChevronDown, Mail, Twitter, Linkedin, Github } from "lucide-react";
import TimebookLogo from "./TimebookLogo";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    product: false,
    company: false,
    resources: false,
    legal: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const footerSections = {
    product: {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "AI Integration", href: "#ai" },
        { label: "Analytics", href: "#analytics" },
        { label: "Collaboration", href: "#collaboration" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Blog", href: "#blog" },
        { label: "Press", href: "#press" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Documentation", href: "#docs" },
        { label: "API Reference", href: "#api" },
        { label: "Community", href: "#community" },
        { label: "Support", href: "#support" },
      ],
    },
    legal: {
      title: "Legal",
      items: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "Security", href: "#security" },
      ],
    },
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-xl">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
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

          {/* Footer Sections - Desktop */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-foreground mb-4">{footerSections.product.title}</h3>
            <ul className="space-y-2">
              {footerSections.product.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="font-semibold text-foreground mb-4">{footerSections.company.title}</h3>
            <ul className="space-y-2">
              {footerSections.company.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="font-semibold text-foreground mb-4">{footerSections.resources.title}</h3>
            <ul className="space-y-2">
              {footerSections.resources.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="lg:hidden space-y-4 mb-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="border-b border-border/40 pb-4">
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full text-left font-semibold text-foreground mb-2"
              >
                {section.title}
                {openSections[key] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              {openSections[key] && (
                <ul className="space-y-2 mt-2">
                  {section.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Timebook. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#privacy" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#terms" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#cookies" className="hover:text-foreground transition-colors">Cookies</a>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Built with ❤️ for product teams everywhere
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
