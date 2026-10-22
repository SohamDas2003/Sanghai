export const siteConfig = {
  companyName: "Sanghai Enterprises",
  tagline: "YouTube Promotion & Channel Growth Partner",
  description:
    "YouTube promotion partner helping creators and brands grow their channels, reach the right viewers, and build engaged audiences.",
  logo: "/logo-sanghai.png",
  favicon: "/icon.png",
  whatsappNumber: "917738137483",
  email: "info@sanghaienterprises.com",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "Why Us" },
    { href: "/contact", label: "Contact" },
  ],
};

export function getWhatsAppLink(customMessage?: string): string {
  const message =
    customMessage || "Hi, I'd like to talk about YouTube promotion for my channel.";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
