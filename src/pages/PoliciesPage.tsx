import { motion } from "framer-motion";

export default function PoliciesPage() {
  return (
    <>
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl text-foreground"
          >
            Booking Policies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-body mt-4 max-w-xl mx-auto"
          >
            Appointments, Cancellations & Late Arrivals
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container max-w-2xl space-y-10">
          {/* Cancellations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg text-foreground mb-4">
              Cancellations / Missed Appointments
            </h2>
            <div className="glass-card p-6 space-y-3 text-body">
              <p>
                A minimum of <strong>24 hours' notice</strong> is required to cancel or reschedule an appointment.
              </p>
              <p>
                Appointments cancelled with less than 24 hours' notice, or missed appointments, will incur a <strong>$10 fee</strong>.
              </p>
              <p>
                The cancellation fee must be paid before re-booking any future appointments.
              </p>
            </div>
          </motion.div>

          {/* Late Arrivals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <h2 className="heading-lg text-foreground mb-4">Late Arrivals</h2>
            <div className="glass-card p-6 space-y-3 text-body">
              <p>
                If you are running late, please notify us as soon as possible.
              </p>
              <p>
                Arriving more than <strong>10 minutes late</strong> may result in a fee or the appointment needing to be shortened or rescheduled, depending on availability.
              </p>
            </div>
          </motion.div>

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <div className="glass-card p-6 text-center">
              <p className="text-body font-medium text-foreground">
                By booking an appointment, you acknowledge and agree to these policies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
