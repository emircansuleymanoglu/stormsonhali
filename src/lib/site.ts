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
    intro:
      "Voor bedrijven die vaste leverafspraken, duidelijke planning en betrouwbare capaciteit nodig hebben.",
    highlights: [
      "FTL en LTL transport voor dagelijkse en wekelijkse routes.",
      "Dedicated wagens voor tijdkritische of vaste distributiestromen.",
      "Planning met actieve opvolging tot de levering is afgerond.",
    ],
    process: [
      "We bepalen volume, laadvensters, afleverafspraken en routeprioriteit.",
      "De planning koppelt capaciteit, chauffeur en communicatie aan de zending.",
      "Na levering ontvangt u duidelijke terugkoppeling en waar nodig bewijs van aflevering.",
    ],
    idealFor: [
      "Producenten met vaste klantafspraken.",
      "Groothandels en retailstromen.",
      "Zendingen met tijdvensters of spoed in de operatie.",
    ],
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
    intro:
      "Opslagcapaciteit voor voorraad die overzichtelijk, bereikbaar en klaar voor uitlevering moet blijven.",
    highlights: [
      "Inbound controle, inslag en overzichtelijke locatie-indeling.",
      "Orderpicking, ompakken en verzendklaar maken van goederen.",
      "Flexibele ruimte voor piekperiodes, seizoensvoorraad en groei.",
    ],
    process: [
      "We stemmen artikelen, volumes en handling-eisen af.",
      "Goederen worden verwerkt volgens een duidelijke inbound workflow.",
      "Voorraad en uitlevering blijven inzichtelijk voor planning en klantafspraken.",
    ],
    idealFor: [
      "Webshops en B2B leveranciers.",
      "Bedrijven met tijdelijke ruimtebehoefte.",
      "Voorraadstromen die transport en opslag combineren.",
    ],
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
    intro:
      "Palletdistributie voor goederenstromen die strak moeten doorlopen van aanlevering tot eindbestemming.",
    highlights: [
      "Regionale distributie met heldere afleverafspraken.",
      "Cross-docking en consolidatie voor efficientere ritten.",
      "Geschikt voor retail, e-commerce, food-grade en industrie.",
    ],
    process: [
      "We verzamelen afmetingen, gewichten, losadressen en gewenste leverdagen.",
      "Pallets worden gebundeld in routes met voorspelbare kosten en timing.",
      "Afwijkingen worden snel teruggekoppeld zodat uw team kan bijsturen.",
    ],
    idealFor: [
      "Meerdere palletzendingen per week.",
      "Distributie naar winkels, magazijnen en zakelijke klanten.",
      "Goederenstromen met behoefte aan consolidatie.",
    ],
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
    intro:
      "Ondersteuning voor teams die meer grip willen op planning, voorraad, transportkeuzes en prestaties.",
    highlights: [
      "Transportcoordinatie tussen leveranciers, magazijnen en klanten.",
      "Praktische KPI-rapportage voor levertijd, afwijkingen en capaciteit.",
      "Verbetering van dagelijkse processen zonder onnodige complexiteit.",
    ],
    process: [
      "We brengen knelpunten, volumes en communicatiepunten in kaart.",
      "Daarna richten we afspraken in voor planning, opvolging en rapportage.",
      "Uw team krijgt een duidelijk ritme voor evaluatie en operationele bijsturing.",
    ],
    idealFor: [
      "Groeiende logistieke netwerken.",
      "Teams met veel losse transportcontacten.",
      "Bedrijven die voorspelbaarheid en rapportage willen verbeteren.",
    ],
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
  },
];

export const stats = [
  { value: "24/7", label: "zicht op de planning" },
  { value: "98.7%", label: "op tijd geleverd" },
  { value: "Europe", label: "dagelijks netwerkbereik" },
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
