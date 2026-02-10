import type { VercelRequest, VercelResponse } from "@vercel/node";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfhjeYDdU7M5u7aO9Ea1Vv0a6APGSYpLCRZQBpieVktHnc0Ww/formResponse";

const FORM_FIELDS = {
  name: "entry.2003012140",
  email: "entry.648166191",
  phone: "entry.1130132798",
  date: "entry.322805801",
  time: "entry.453100284",
  services: "entry.1184764026",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });

  const { name, email, phone, date, time, services } = req.body;

  try {
    const payload = new URLSearchParams();
    payload.append(FORM_FIELDS.name, name || "");
    payload.append(FORM_FIELDS.email, email || "");
    payload.append(FORM_FIELDS.phone, phone || "");
    payload.append(FORM_FIELDS.date, date || "");
    payload.append(FORM_FIELDS.time, time || "");
    payload.append(FORM_FIELDS.services, (services || []).join(", "));

    await fetch(GOOGLE_FORM_ACTION, { method: "POST", body: payload });

    return res.status(200).json({ message: "Appointment submitted successfully" });
  } catch (err) {
    console.error("Appointment submission error:", err);
    return res.status(500).json({ message: "Submission failed" });
  }
}
