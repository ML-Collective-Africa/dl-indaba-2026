export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Panelists" },
  { href: "/organizers", label: "Organizers" },
  { href: "/sponsors", label: "Sponsors" },
];

export interface Speaker {
  name: string;
  affiliation: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Chinasa T. Okolo",
    affiliation: "Founder and Scientific Director, Technecultura",
    image: "/assets/images/speakers/chinasa.png",
    website: "https://www.chinasatokolo.com/",
  },
  {
    name: "Tobi Olatunji",
    affiliation: "Founder, Intron",
    image: "/assets/images/speakers/tobi.jpeg",
    linkedin: "https://www.linkedin.com/in/tobi-olatunji-md",
  },
  {
    name: "Ayomide Odumankinde",
    affiliation: "Member of Technical Staff, Cohere",
    image: "/assets/images/speakers/ayo.jpeg",
    linkedin: "https://www.linkedin.com/in/ayoodumak/",
  },
  {
    name: "Chris Emezue",
    affiliation: "LanAfrica Labs / Mila Quebec AI Institute",
    image: "/assets/images/speakers/chris.png",
    website: "https://chrisemezue.github.io/",
  },
  {
    name: "Ayantola Alayande",
    affiliation: "Researcher, Global Center on AI Governance (GCG)",
    image: "/assets/images/speakers/ayantala.jpeg",
    website: "https://www.globalcenter.ai/about/ayantola-alayande",
  },
];

export interface Person {
  name: string;
  affiliation: string;
  image?: string;
  linkedin?: string;
  website?: string;
}

export interface PersonGroup {
  title: string;
  members: Person[];
  columns?: 2 | 3;
  background?: boolean;
}

export const ORGANIZER_GROUPS: PersonGroup[] = [
  {
    title: "Lead organizers",
    columns: 3,
    members: [
      {
        name: "Chisom Chibuike",
        affiliation: "ML Collective · University of Cambridge",
        image: "/assets/images/organizers/chisom.png",
        website: "https://sites.google.com/view/chisom-chibuike",
      },
      {
        name: "Ifihanagbara Olusheye",
        affiliation: "ML Collective · University of the Witwatersrand",
        image: "/assets/images/organizers/ifihan.jpg",
        website: "https://ifihan.com/",
      },
      {
        name: "Honour-Jesus Bezaleel",
        affiliation: "ML Collective · Ekiti State University",
        image: "/assets/images/organizers/honour-jesus.jpg",
        linkedin: "https://www.linkedin.com/in/honour-jesus-bezaleel/",

      },
    ],
  },
  {
    title: "Organizers",
    columns: 3,
    background: true,
    members: [
      {
        name: "Busayo Awobade",
        affiliation: "Intron",
        image: "/assets/images/organizers/busayo.jpeg",
        website: "https://iambusayor.github.io",
      },
      {
        name: "Chialuka Onuoha",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/chialuka.jpg",
        linkedin: "https://www.linkedin.com/in/chialuka-prisca-mary-onuoha-630205229/",
      },
      {
        name: "Prince Mireku",
        affiliation: "Ashesi University · Google Research Africa · ML Collective",
        image: "/assets/images/organizers/prince.jpg",
        linkedin: "https://www.linkedin.com/in/prince-mireku-2a318b203/",
      },
    ],
  },
  {
    title: "Workshop chairs",
    columns: 3,
    members: [
      {
        name: "Steven Kolawole",
        affiliation: "Carnegie Mellon University · Amazon Bedrock",
        image: "/assets/images/organizers/steven.png",
        website: "https://stevenkolawole.github.io/"
      },
      {
        name: "Abraham Owodunni",
        affiliation: "Ohio State University",
        image: "/assets/images/organizers/abraham.jpg",
        website: "https://owos.github.io/",
      },
      {
        name: "Mardiyyah Oduwole",
        affiliation: "University of Bristol · Avolution",
        image: "/assets/images/organizers/mardiyyah.jpeg",
        website: "http://mardiyyahoduwole.com/"
      },
    ],
  },
  {
    title: "Advisors",
    columns: 2,
    background: true,
    members: [
      {
        name: "Rosanne Liu",
        affiliation: "Google DeepMind",
        image: "/assets/images/organizers/rosanne.jpg",
        website: "https://rosanneliu.com/"
      },
      {
        name: "Jason Yosinski",
        affiliation: "OpenAI",
        image: "/assets/images/organizers/jason.png",
        website: "https://yosinski.com/",
      },
    ],
  },
  {
    title: "Volunteers",
    columns: 3,
    members: [
      {
        name: "Asama Temitope",
        affiliation: "Researcher · ML Collective",
        image: "/assets/images/organizers/asama.jpg",
        linkedin: "https://www.linkedin.com/in/temitopeasama/"
      },
      {
        name: "Ayodeji Adesegun",
        affiliation: "Researcher · ML Collective",
        image: "/assets/images/organizers/ayodeji.jpg",
        website: "https://ayodeji.tech",
      },
      {
        name: "Fatimo Adebanjo",
        affiliation: "ML Collective",
        image: "/assets/images/organizers/fatimo.jpeg",
        linkedin: "https://www.linkedin.com/in/fatimo-adebanjo/",
      },
      {
        name: "Emmanuel Idoko",
        affiliation: "ML Collective · University of Lagos",
        image: "/assets/images/organizers/emmanuel.jpg",
        linkedin: "https://www.linkedin.com/in/emmanuelidoko/"
      },
      {
        name: "Ibukun Oduntan",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/ibukun.png",
        linkedin: "https://www.linkedin.com/in/ibukun-d-oduntan/"
      },
      {
        name: "Iremide Oyelaja",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/iremide.jpg",
        linkedin: "https://www.linkedin.com/in/oyelajairemide/"
      },
      {
        name: "Kayode Makinde",
        affiliation: "AI Engineer · Rio Eigen",
        image: "/assets/images/organizers/kayode.jpeg",
        linkedin: "https://www.linkedin.com/in/kayode-makinde-4b0b491ba/",
      },
      {
        name: "Kelechi Chibundu",
        affiliation: "ML Collective · FUNAAB",
        image: "/assets/images/organizers/kelechi.jpeg",
        linkedin: "https://www.linkedin.com/in/kelechichibundu/",
      },
      {
        name: "Nunsi Shaki",
        affiliation: "ML Collective",
        image: "/assets/images/organizers/nunsi.jpeg",
        linkedin: "https://www.linkedin.com/in/nunsi-shiaki/"
      },
      {
        name: "Olamide Lawal",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/olamide.jpg",
        linkedin: "https://www.linkedin.com/in/olamide--lawal/"
      },
      {
        name: "Shiloh Oni",
        affiliation: "Independent Researcher",
        image: "/assets/images/organizers/shiloh.jpg",
        linkedin: "https://www.linkedin.com/in/adebisi-oni-2a6aa83b8/"
      },
      {
        name: "Yusuf Olaniyi",
        affiliation: "Carnegie Mellon University, Africa",
        image: "/assets/images/organizers/yusuf.jpg",
        linkedin: "https://www.linkedin.com/in/yusuf-olaniyi/"
      },
    ],
  },
];

export interface ScheduleItem {
  time: string;
  title: string;
  note?: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    time: "12:00 – 12:05 pm",
    title: "Arrival of Attendees",
  },
  {
    time: "12:05 – 12:15 pm",
    title: "Workshop Introduction",
    note: "Opening of the workshop and introduction of the panelists.",
  },
  {
    time: "12:15 – 1:00 pm",
    title: "Panelist Session — Whose Intelligence? Building Agentic AI in Africa without frontier model dependency",
    note: "Panelists explore how agentic AI can be built for African realities without depending on frontier models, drawing on their areas of expertise. Panelists: Chinasa T. Okolo, Tobi Olatunji, Ayomide Odumankinde, Chris Emezue, and Ayantola Alayande.",
  },
  {
    time: "1:00 – 1:20 pm",
    title: "Fishbowl Round Table Discussion (participants vs panelists)",
    note: "Participants will engage with panelists based on the debates arising from the 4 frameworks discussed. Each table has a focused theme from the 4 concerned frameworks, offering participants the opportunity to engage directly with the panelists.",
  },
  {
    time: "1:20 – 1:25 pm",
    title: "Extra Q&A",
  },
  {
    time: "1:25 – 1:30 pm",
    title: "Closing",
  },
];

export const WORKSHOP_EVENT = {
  targetDate: new Date("2026-08-07T12:00:00+01:00"),
  format: "Forums & Dialogues",
  length: "90 minutes",
  venue: "DLI 2026",
  hostedBy: "ML Collective (Africa)",
  output: "Open Preprint",
};
