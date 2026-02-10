import type { VercelRequest, VercelResponse } from "@vercel/node";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSezysoYjv0Fi-BmsWWG0aavKmqQpvaXRw29VeAKiPAOoCUhBg/formResponse";

const FORM_FIELDS = {
  name: "entry.583341131",
  phone: "entry.1718587115",
  service: "entry.196858041",
  message: "entry.1192609644",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, phone, service, message } = req.body;

  try {
    const payload = new URLSearchParams();
    payload.append(FORM_FIELDS.name, name || "");
    payload.append(FORM_FIELDS.phone, phone || "");
    payload.append(FORM_FIELDS.service, service || "");
    payload.append(FORM_FIELDS.message, message || "");

    // Submit to Google Form
    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      body: payload,
    });

    // Optional: send email to site owner here using nodemailer / SendGrid / etc.

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Error submitting form:", err);
    return res.status(500).json({ message: "Form submission failed" });
  }
}
