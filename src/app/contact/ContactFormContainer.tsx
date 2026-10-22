"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormContainer() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "Not sure yet";

  return (
    <ContactForm
      defaultService={service}
      buttonLabel="Submit & Request Free Proposal"
    />
  );
}
