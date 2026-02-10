import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, AppointmentFormData } from "./validation";
import { motion, AnimatePresence } from "framer-motion";
import { isToday, isAfter, setHours, setMinutes, getDay } from "date-fns";

const SERVICES = [
  "Basic Mani/Pedi (No Polish)",
  "Mini Mani (Kids 12 & Under)",
  "Gel Pedi (Dry)",
  "Gel Mani",
  "GelX Short",
  "GelX Medium",
  "GelX Long",
  "GelX XL",
  "SNS Overlay (Natural Nail)",
  "SNS Infill",
  "Stickers",
  "3D Nail Art",
  "Hand Painted Art",
  "Soak Off / Removal",
  "Nail Repair",
];

function generateTimeSlots(date: Date) {
  const slots: string[] = [];
  const now = new Date();

  for (let hour = 10; hour < 18; hour++) {
    for (const minute of [0, 30]) {
      const slot = setMinutes(setHours(date, hour), minute);
      if (isToday(date) && !isAfter(slot, now)) continue;
      slots.push(
        slot.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true, })
      );
    }
  }
  return slots;
}

export default function AppointmentForm() {
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [weekendWarning, setWeekendWarning] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      services: [],
    },
  });

  const selectedDate = watch("date");
  const selectedServices = watch("services");
  const [timeError, setTimeError] = useState("");

  useEffect(() => {
  if (!selectedDate) return;

  const date = new Date(selectedDate);
  const day = getDay(date);

  // Weekend check
  if (day === 0 || day === 6) {
    setTimeSlots([]);
    setWeekendWarning("Appointments not available on weekends.");
    setTimeError("");
    setValue("time", "");
    setSelectedTime("");
    return;
  }

  const slots = generateTimeSlots(date);

  // Today but no slots left
  if (slots.length === 0) {
    setTimeSlots([]);
    setWeekendWarning("");
    setTimeError(
      "No available time slots for today. Please select tomorrow or another date."
    );
    setValue("time", "");
    setSelectedTime("");
    return;
  }

  // Normal day
  setWeekendWarning("");
  setTimeError("");
  setTimeSlots(slots);
  setSelectedTime("");
  setValue("time", "");
}, [selectedDate, setValue]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue(
        "services",
        selectedServices.filter((s) => s !== service)
      );
    } else {
      setValue("services", [...selectedServices, service]);
    }
  };

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");

      setShowSuccess(true); // Show popup
      reset(); // Clear form
      setSelectedTime("");
    } catch {
      alert("Submission failed. Please try again or contact us directly.");
    }
  };

  return (
    <div className="section-padding">
      <div className="section-container max-w-3xl mx-auto">
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 bg-background/50 glass-card p-8 rounded-lg shadow-lg"
        >
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Full Name *
              </label>
              <input
                {...register("name")}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
              {errors.name && (
                <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Email
              </label>
              <input
                type="text"
                inputMode="email"
                {...register("email")}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-foreground mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+61 4XX XXX XXX"
                {...register("phone")}
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring"
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Select Appointment Date *
            </label>
            <input
              type="date"
              {...register("date")}
              min={new Date().toISOString().split("T")[0]}
              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:ring-2 focus:ring-ring"
            />
            {errors.date && (
              <p className="text-destructive text-xs mt-1">{errors.date.message}</p>
            )}
            {weekendWarning && (
              <p className="text-destructive text-xs mt-1">{weekendWarning}</p>
            )}
          </div>

          {/* Appointment Time */}
          {timeSlots.length > 0 && (
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Choose a Time Slot *
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {timeSlots.map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setValue("time", time);
                    }}
                    className={`rounded-md border px-3 py-2 text-sm transition
                      ${
                        selectedTime === time
                          ? "bg-primary text-white border-primary"
                          : "border-border hover:bg-muted"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-destructive text-xs mt-2">{errors.time.message}</p>
              )}
            </div>
          )}
          {timeError && (
            <p className="text-destructive text-xs mt-2">
              {timeError}
            </p>
          )}

          {/* Services */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Select Services *
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 border rounded-md p-3 cursor-pointer hover:bg-muted"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
            {errors.services && (
              <p className="text-destructive text-xs mt-2">{errors.services.message}</p>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-4 font-body">
            By booking, you agree to our{" "}
            <Link
              to="/policies"
              className="underline text-primary hover:text-primary/90 transition-colors"
              >
              Policies
            </Link>.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-start bg-primary text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-primary/90 transition"
          >
            {isSubmitting ? "Submitting..." : "Request Appointment"}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <div className="bg-white rounded-lg p-8 max-w-sm text-center shadow-xl">
              <h3 className="heading-md text-foreground mb-4">Appointment Booked!</h3>
              <p className="text-body mb-6">
                Thank you! We’ll contact you shortly to confirm your appointment.
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  window.location.href = "/";
                }}
                className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition"
              >
                Go to Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
