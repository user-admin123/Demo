import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/glossx-logo.png";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImage} alt="GlossX Nail Studio" className="h-10 md:h-12 w-auto" />
          <span className="font-heading text-xl md:text-2xl font-semibold text-foreground tracking-wide">
            Glossx Nail Studio
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-body font-normal tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <nav className="section-container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-body py-2 transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
              Glossx Nail Studio
            </h3>
            <p className="text-body text-sm">
              Certified Nail Technician providing high-quality gel nail services in Tara, QLD.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/policies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Policies
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-lg font-medium text-foreground mb-3">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="tel:+61460600374"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={14} />
                +61 460 600 374
              </a>
              <a
                href="mailto:glossxnailstudio@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                <Mail size={14} />
                glossxnailstudio@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>38 Adams St, Tara QLD 4421, Australia</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://instagram.com/glossxnailstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61559004176830"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Glossx Nail Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
