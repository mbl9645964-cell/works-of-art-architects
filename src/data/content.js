// Centralized content for Works of Art — Architects & Interior Designers (est. 1997).
// Imagery: high-end editorial architecture & interior photography served responsively.

const U = (id, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const img = {
  hero: '1600585154340-be6161a56a0c',
  heroAlt: '1600210492486-724fe5c67fb0',
  philosophy: '1615875605825-5eb9bb5d52ac',
  materials: '1618219908412-a29a1bb7b86e',
  cta: '1616137466211-f939a420be84',
  intro: '1618221195710-dd6b41faaea6',
}

export const src = (id, w, q) => U(id, w, q)

export const responsive = (id) => ({
  src: U(id, 1400),
  srcSet: [640, 960, 1400, 2000].map((w) => `${U(id, w)} ${w}w`).join(', '),
})

export const projects = [
  {
    id: 'private-residence-interior',
    title: 'Private Residence — Interiors',
    location: 'Civil Lines, Delhi',
    category: 'Residential Interior',
    year: '2023',
    image: '1600585154340-be6161a56a0c',
    gallery: ['1600607687939-ce8a6c25118c', '1616486338812-3dadae4b4ace', '1615529182904-14819c35db37'],
    summary:
      'A full-home interior planned around light, flow and family life — warm materials and considered detail, delivered turnkey.',
    scope: ['Interior design', 'Custom joinery', 'Vastu alignment', 'Execution & supervision'],
    quote: 'They planned every corner around how we actually live.',
  },
  {
    id: 'family-home-architecture',
    title: 'Family Home — Architecture',
    location: 'Delhi NCR',
    category: 'Residential Exterior',
    year: '2022',
    image: '1600607687939-ce8a6c25118c',
    gallery: ['1600585154340-be6161a56a0c', '1618221195710-dd6b41faaea6', '1615529182904-14819c35db37'],
    summary:
      'Ground-up architecture for a modern family home — proportion, elevation and landscape resolved as one composition.',
    scope: ['Architectural design', 'Landscape design', 'Approvals & drawings', 'Project management'],
    quote: 'From plot to handover, one team held the whole vision.',
  },
  {
    id: 'contemporary-apartment',
    title: 'Contemporary Apartment',
    location: 'North Delhi',
    category: 'Residential Interior',
    year: '2022',
    image: '1522708323590-d24dbb6b0267',
    gallery: ['1560448204-e02f11c3d0e2', '1616137466211-f939a420be84', '1631679706909-1844bbd07221'],
    summary:
      'A compact apartment reworked into an open, warm-neutral home with intelligent storage and layered lighting.',
    scope: ['Space planning', 'Interior design', 'Material selection', 'Turnkey execution'],
    quote: 'Every inch works harder now — and it still feels generous.',
  },
  {
    id: 'corporate-office',
    title: 'Corporate Office',
    location: 'Connaught Place, Delhi',
    category: 'Office Interior',
    year: '2023',
    image: '1567016432779-094069958ea5',
    gallery: ['1604014237800-1c9102c219da', '1600607687939-ce8a6c25118c', '1616486338812-3dadae4b4ace'],
    summary:
      'A workplace fit-out balancing brand, function and daily use — reception, cabins and workstations planned for calm productivity.',
    scope: ['Workplace planning', 'Interior design', 'Services coordination', 'Turnkey fit-out'],
    quote: 'Professional, on-time, and exactly on brief.',
  },
  {
    id: 'institutional-project',
    title: 'Institutional Project',
    location: 'Delhi',
    category: 'Institutional',
    year: '2021',
    image: '1616137466211-f939a420be84',
    gallery: ['1616486338812-3dadae4b4ace', '1560448204-e02f11c3d0e2', '1522708323590-d24dbb6b0267'],
    summary:
      'A public-use institutional space designed for durability, circulation and clarity — functional architecture with a human touch.',
    scope: ['Architectural design', 'Space planning', 'Compliance & approvals', 'Supervision'],
    quote: 'They understood the brief of a public building completely.',
  },
  {
    id: 'commercial-space',
    title: 'Commercial & Retail',
    location: 'Delhi',
    category: 'Commercial Interior',
    year: '2021',
    image: '1616594039964-ae9021a400a0',
    gallery: ['1618219908412-a29a1bb7b86e', '1631679706909-1844bbd07221', '1560448204-e02f11c3d0e2'],
    summary:
      'A commercial interior built to attract and endure — a material-rich environment tuned to footfall and brand experience.',
    scope: ['Commercial design', 'Concept & FF&E', 'Lighting design', 'Execution'],
    quote: 'Our space finally reflects who we are as a brand.',
  },
]

export const services = [
  { n: '01', title: 'Architectural Design', text: 'Ground-up architecture and elevations, from concept to construction drawings and approvals.' },
  { n: '02', title: 'Interior Design', text: 'Residential, office, commercial and institutional interiors — planned, detailed and executed turnkey.' },
  { n: '03', title: 'Landscape Design', text: 'Gardens, courtyards and outdoor spaces designed as an extension of the built form.' },
  { n: '04', title: 'Vastu Consultancy', text: 'Design that respects Vastu principles without compromising on modern function or aesthetics.' },
  { n: '05', title: 'Space Planning', text: 'Intelligent spatial planning that resolves circulation, proportion and use before work begins.' },
  { n: '06', title: 'Project Management', text: 'Timelines, vendors and budgets managed end to end, within pre-established financial limits.' },
  { n: '07', title: 'Design Consultancy & Supervision', text: 'Expert consultancy and on-site supervision that keep the design intact through execution.' },
  { n: '08', title: 'Turnkey Execution', text: 'A single point of accountability from first sketch to the day you receive the keys.' },
]

export const stats = [
  { value: 25, suffix: '+', label: 'Years of practice · since 1997' },
  { value: 4, suffix: '', label: 'Design disciplines under one roof' },
  { value: 66, suffix: '+', label: 'Years of combined team expertise' },
  { value: 100, suffix: '%', label: 'Bespoke, client-led design' },
]

export const process = [
  { n: '01', title: 'Brief & Consultation', text: 'We listen first — your requirements, site, budget and timeline. Every project begins with understanding.' },
  { n: '02', title: 'Concept & Vastu', text: 'A clear design direction — spatial narrative, form and Vastu alignment set the foundation.' },
  { n: '03', title: 'Design Development', text: 'Plans, elevations, interiors and detailing refined together until the design is fully resolved.' },
  { n: '04', title: 'Drawings & Approvals', text: 'Working drawings, statutory approvals and material selections locked before work starts on site.' },
  { n: '05', title: 'Execution & Supervision', text: 'Skilled teams and rigorous site supervision turn the drawings into built reality, on schedule.' },
  { n: '06', title: 'Handover', text: 'Finished, checked and ready — we hand over a space that is complete from day one.' },
]

export const team = [
  { name: 'Ashish Taneja', role: 'Architect · B.Arch.', exp: '13+ years of experience' },
  { name: 'Rajni Taneja', role: 'Architect · B.Arch.', exp: '13+ years of experience' },
  { name: 'R. C. Sehgal', role: 'Architect · B.Arch. · Associate', exp: '25+ years of experience' },
  { name: 'S. K. Gupta', role: 'Civil Engineer · B.E. · Associate', exp: '15+ years of experience' },
]

export const testimonials = [
  {
    quote:
      'Works of Art planned our home around the way we actually live. The design is warm, functional and completely ours — and it was delivered on time.',
    name: 'Residential Client',
    project: 'Home Interiors',
    location: 'Delhi',
  },
  {
    quote:
      'They handled architecture, interiors and site supervision as one seamless process. Professional, transparent and genuinely creative.',
    name: 'Corporate Client',
    project: 'Office Fit-out',
    location: 'Delhi',
  },
  {
    quote:
      'Decades of experience really shows. Every drawing, material and detail was considered, and the Vastu guidance gave us real peace of mind.',
    name: 'Private Client',
    project: 'Family Residence',
    location: 'Delhi NCR',
  },
]

export const materials = [
  { id: '1618219908412-a29a1bb7b86e', label: 'Natural Stone' },
  { id: '1615875605825-5eb9bb5d52ac', label: 'Warm Timber' },
  { id: '1631679706909-1844bbd07221', label: 'Considered Detail' },
  { id: '1604014237800-1c9102c219da', label: 'Architectural Light' },
]

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#philosophy' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const studio = {
  name: 'Works of Art',
  logoMain: 'Works of Art',
  logoSub: 'Architects',
  tagline: 'Designing Spaces as Works of Art — Since 1997.',
  heroEyebrow: 'Architects & Interior Designers · Delhi · Est. 1997',
  heroLines: ['Architecture,', 'crafted', 'as art.'],
  heroFoot: 'Architecture · Interiors · Landscape · Vastu',
  introLead:
    'Works of Art — Architects & Interior Designers has been designing spaces since 1997. As pioneers in spatial planning and design consultancy, we work across architecture, interiors, landscape and Vastu — translating each client’s needs into considered plans, delivered on time and within a clear budget.',
  address: '5268, Kolhapur Road, Kamla Nagar, Delhi 110007',
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneHref: '+91',
  email: 'worksofart.architects@gmail.com',
  instagram: 'worksofart.architects',
  instagramUrl: 'https://instagram.com/worksofart.architects',
}
