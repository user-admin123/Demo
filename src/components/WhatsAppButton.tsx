import { MessageCircle } from "lucide-react";

const PHONE = "+917395863031";
const MESSAGE = encodeURIComponent("Hi! I'd like to book an appointment at GlossX Nail Studio 💅");

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} fill="white" strokeWidth={0} />
    </a>
  );
}
