import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface ServiceItem {
  name: string;
  price: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: "Mani / Pedi",
    services: [
      { name: "Basic Mani/Pedi (No Polish)", price: "$15.00" },
      { name: "Mini Mani (Kids 12 & Under)", price: "$15.00" },
      { name: "Gel Pedi (Dry)", price: "$35.00" },
      { name: "Gel Mani", price: "$35.00" },
    ],
  },
  {
    title: "Gel Extensions",
    services: [
      { name: "GelX Short", price: "$45.00" },
      { name: "GelX Medium", price: "$55.00" },
      { name: "GelX Long", price: "$65.00" },
      { name: "GelX XL", price: "$75.00" },
    ],
  },
  {
    title: "SNS",
    services: [
      { name: "SNS Overlay (Natural Nail)", price: "$40.00" },
      { name: "SNS Infill", price: "$30.00" },
    ],
  },
  {
    title: "Extras",
    services: [
      { name: "Stickers", price: "$2.50" },
      { name: "3D Nail Art", price: "$5.00" },
      { name: "Hand Painted Art", price: "$5.00" },
      { name: "Soak Off / Removal", price: "$20.00" },
      { name: "Nail Repair", price: "$5 – $10" },
    ],
  },
];

export default function ServicesPage() {
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
            Services & Prices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            Transparent pricing for all our nail services. Quality products, beautiful results.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                custom={catIdx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="glass-card p-6 md:p-8"
              >
                <h2 className="heading-md text-foreground mb-6 pb-3 border-b border-border">
                  {category.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {category.services.map((service) => (
                    <div key={service.name} className="flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base text-foreground font-body">
                        {service.name}
                      </span>
                      <span className="text-sm md:text-base font-body font-bold text-primary whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Please review our{" "}
            <a href="/policies" className="underline text-primary hover:text-primary/80 transition-colors">
              Policies
            </a>{" "}
            regarding cancellations and late arrivals.
          </p>
        </div>
      </section>
    </>
  );
}
