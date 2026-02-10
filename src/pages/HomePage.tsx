import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nails.jpg";

const highlights = [
  { title: "Gel Manicure", icon: "💅" },
  { title: "Gel Pedicure", icon: "🦶" },
  { title: "GelX Extensions", icon: "✨" },
  { title: "SNS Nails", icon: "💎" },
  { title: "Custom Nail Art", icon: "🎨" },
  { title: "Nail Repair", icon: "🔧" },
];

const hours = [
  { day: "Monday", time: "10:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
  { day: "Thursday", time: "10:00 AM – 6:00 PM" },
  { day: "Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Glossx Nail Studio products and tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative section-container py-28 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="heading-xl text-primary-foreground mb-4">
              Glossx Nail Studio
            </h1>
            <p className="text-lg md:text-xl font-body font-light text-primary-foreground/85 max-w-xl mx-auto mb-8">
              Certified Nail Technician · Home-Based Nail Salon in Tara, QLD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/appointment">
                  Book Appointment
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="section-container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-primary" size={20} />
              <span className="text-sm font-body tracking-widest uppercase text-primary">
                Welcome
              </span>
            </div>
            <h2 className="heading-lg text-foreground mb-6">
              Beautiful Nails, Personalized for You
            </h2>
            <p className="text-body">
              GlossX is a home-based nail salon in Tara, QLD, dedicated to providing
              high-quality gel nail services with a personal touch. Using premium products
              and attention to detail, every set is designed to be long-lasting and
              uniquely yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-foreground mb-4">Our Services</h2>
            <p className="text-body max-w-lg mx-auto">
              From classic gels to creative nail art — find the perfect service for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card p-5 text-center hover:shadow-[var(--shadow-soft)] transition-shadow duration-300"
              >
                <span className="text-3xl mb-3 block">{service.icon}</span>
                <span className="text-sm font-body font-normal text-foreground">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View All Prices
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="section-padding">
        <div className="section-container max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-primary" size={20} />
              <span className="text-sm font-body tracking-widest uppercase text-primary">
                Hours
              </span>
            </div>
            <h2 className="heading-lg text-foreground">Business Hours</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass-card p-6"
          >
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between py-2.5 border-b border-border/50 last:border-0 text-sm font-body"
              >
                <span className="text-foreground">{h.day}</span>
                <span
                  className={
                    h.time === "Closed"
                      ? "text-muted-foreground"
                      : "text-primary font-bold"
                  }
                >
                  {h.time}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-secondary">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-primary" size={20} />
              <span className="text-sm font-body tracking-widest uppercase text-primary">
                Location
              </span>
            </div>
            <h2 className="heading-lg text-foreground mb-2">Find Us</h2>
            <p className="text-body">38 Adams St, Tara QLD 4421, Australia</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-border"
          >
            <iframe
              title="GlossX Nail Studio Location"
              src="https://maps.google.com/maps?q=38+Adams+St,+Tara+QLD+4421,+Australia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
