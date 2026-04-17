import {
  Boxes,
  Clock3,
  Factory,
  Handshake,
  MapPinned,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

export const site = {
  name: "Storm Logistics",
  url: "https://example.com",
  phone: "+31 685 602 308",
  email: "info@stormlogisitcs.nl",
  whatsapp: "31685602308",
  address: "Parkweg 305, 3119 CJ Schiedam, Nederland",
  city: "Schiedam",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Over ons" },
  { href: "/services", label: "Diensten" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Wegtransport",
    slug: "road-transport",
    icon: Truck,
    summary:
      "FTL, LTL en dedicated distributie in Nederland, Belgie en Duitsland.",
    details:
      "Geplande routes, levering binnen tijdvensters, ADR-opties en proactieve updates vanuit de planning.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Opslag",
    slug: "warehousing",
    icon: Warehouse,
    summary:
      "Flexibele opslag, inbound handling, orderpicking en value-added logistics.",
    details:
      "Tijdelijke extra ruimte of langdurig voorraadbeheer met heldere processen en voorraadzicht.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Palletdistributie",
    slug: "pallet-distribution",
    icon: PackageCheck,
    summary:
      "Betrouwbare palletstromen voor retail, e-commerce, food-grade en industriele ketens.",
    details:
      "Cross-docking, consolidatie en regionale routes met focus op snelheid, nauwkeurigheid en voorspelbare kosten.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Supply chain ondersteuning",
    slug: "supply-chain-support",
    icon: Boxes,
    summary:
      "Operationele planning, transportcoordinatie en KPI-rapportage voor groeiende netwerken.",
    details:
      "Wij ondersteunen inkoop, planners en magazijnteams met praktische verbeteringen die goederen in beweging houden.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
  },
];

export const stats = [
  { value: "24/7", label: "zicht op de planning" },
  { value: "98.7%", label: "op tijd geleverd" },
  { value: "NL + BE", label: "dagelijks netwerkbereik" },
];

export const whyUs = [
  {
    title: "Gebouwd op zekerheid",
    text: "Elke zending heeft een eigenaar, een routeplan en duidelijke opvolging.",
    icon: ShieldCheck,
  },
  {
    title: "Snelle operationele reactie",
    text: "Planning, opslag en chauffeurs werken vanuit dezelfde werkwijze.",
    icon: Clock3,
  },
  {
    title: "Lokale kennis",
    text: "Nederlandse routes, havenverbindingen en Benelux-distributie met kennis van de praktijk.",
    icon: MapPinned,
  },
  {
    title: "Partnerschap in de uitvoering",
    text: "Wij blijven dicht bij uw planning, voorraad druk en klantafspraken.",
    icon: Handshake,
  },
];

export const trustLogos = ["Retail", "Food-grade", "E-commerce", "Industrie"];

export const contactCards = [
  { label: "Bel de planning", value: site.phone, icon: PhoneCall },
  { label: "E-mail operations", value: site.email, icon: Factory },
  { label: "Adres", value: site.address, icon: MapPinned },
];
