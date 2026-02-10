import { motion } from "framer-motion";
import { Heart, Sparkles, Shield, Smile } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Quality Products",
    description: "We use only high-quality gel products for long-lasting, beautiful results.",
  },
  {
    icon: Shield,
    title: "Clean & Professional",
    description: "A hygienic, safe environment with tools sanitized between every client.",
  },
  {
    icon: Heart,
    title: "Personalized Designs",
    description: "Every set is customized to match your style and personality.",
  },
  {
    icon: Smile,
    title: "Friendly Experience",
    description: "Relax and enjoy a warm, welcoming studio experience every visit.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl text-foreground"
          >
            About Glossx
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            Certified Nail Technician | Home-Based Nail Salon in Tara, QLD
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-foreground text-center">Our Story</h2>
            <div className="space-y-4 text-body">
              <p>
                Glossx Nail Studio is a home-based nail salon located in Tara, QLD, founded with a
                passion for creating beautiful, long-lasting nail designs that make every client feel
                special.
              </p>
              <p>
                As a certified nail technician, I focus on delivering personalized nail services using
                only high-quality gel products. Every appointment is a one-on-one experience, giving
                you my full attention and care.
              </p>
              <p>
                Whether you're after a classic gel manicure, statement nail extensions, or intricate
                nail art, I'm dedicated to bringing your vision to life with precision and creativity.
                Your satisfaction is my top priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-lg text-foreground text-center mb-12"
          >
            What We Value
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
