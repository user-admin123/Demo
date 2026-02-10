import { motion } from "framer-motion";
import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <>
      {/* Page Header Section */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl text-foreground"
          >
            Book Your Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            Fill out the form below and we’ll contact you shortly to confirm your appointment.
          </motion.p>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section-padding bg-background min-h-screen">
        <div className="section-container max-w-3xl mx-auto">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
