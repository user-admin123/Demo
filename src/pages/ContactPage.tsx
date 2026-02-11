import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
} from "@/components/validation";

const hours = [
  { day: "Monday", time: "10:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
  { day: "Thursday", time: "10:00 AM – 6:00 PM" },
  { day: "Friday", time: "10:00 AM – 6:00 PM" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "+61", // default country code
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      toast({
        title: "Message sent!",
        description: "Thank you! We’ll contact you shortly.",
      });

      reset({
        name: "",
        phone: "+61",
        service: "",
        message: "",
      });
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            Ready to book? Get in touch and let's create your perfect nails.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-md text-foreground mb-6 text-center">
                Send a Message
              </h2>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 bg-background/50 glass-card p-8 rounded-lg shadow-lg max-w-xl mx-auto"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-body text-foreground mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-body text-foreground mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+61 4XX XXX XXX"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-body text-foreground mb-1">
                    Preferred Service *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="Gel Manicure">Gel Manicure</option>
                    <option value="Gel Pedicure">Gel Pedicure</option>
                    <option value="GelX Extensions">GelX Extensions</option>
                    <option value="SNS Nails">SNS Nails</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Nail Repair">Nail Repair</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-body text-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about the look you'd like..."
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm font-body resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 self-start"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="glass-card p-6">
                <h3 className="heading-md text-foreground mb-4 text-center">
                  Get in Touch
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+61460600374"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone size={18} className="text-primary" />
                    <span className="text-sm font-body">
                      +61 460 600 374
                    </span>
                  </a>
                  <a
                    href="mailto:glossxnailstudio@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    <span className="text-sm font-body">
                      glossxnailstudio@gmail.com
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm font-body">
                      38 Adams St, Tara QLD 4421, Australia
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-heading text-lg font-medium text-foreground mb-4 flex items-center justify-center gap-2">
                  <Clock size={18} className="text-primary" />
                  Business Hours
                </h3>
                <div className="flex flex-col gap-2">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm font-body"
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
                </div>
              </div>
            
              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="GlossX Nail Studio Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.5!2d150.4476!3d-26.9093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzMzLjUiUyAxNTDCsDI2JzUxLjQiRQ!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
