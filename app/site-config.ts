export const siteConfig = {
  name: "NOVA HAIR",
  subtitle: "TRANSPLANT CLINIC",
  logoSrc: "/clinic-logo.png",
  phone: "+971 4 348 8920",
  whatsappNumber: "923000252392",

  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      "Hi, I am reviewing the Nova Hair Clinic demo website and would like to inquire about getting this custom system for my clinic.",
    )}`;
  },

  getDeveloperPitchUrl(name?: string) {
    const clientGreeting = name ? `I'm ${name}. ` : "";
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      `Hi, ${clientGreeting}I just tested your Nova Hair Clinic demo website and would like to discuss getting a custom version for my clinic!`,
    )}`;
  },

  navLinks: [
    { label: "Home", href: "#home", active: true },
    { label: "Before & After", href: "#results" },
    { label: "Our Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
