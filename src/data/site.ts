/**
 * Every fact on this site is transcribed from apnipathshala.org (public pages:
 * Home, About Us, PODs, Start a POD, Apna PC, Contact Us, Student Stories,
 * Volunteering) and from Apni Pathshala's public social profiles.
 *
 * This is an unofficial, student-made redesign concept — nothing here is an
 * official communication of Apni Pathshala, and no money is collected anywhere.
 */

export const OFFICIAL = {
  site: 'https://www.apnipathshala.org',
  startPodForm:
    'https://docs.google.com/forms/d/e/1FAIpQLScIjWxc1-0DnPXS97zXw0Y7-JGIBHs1dDg37GdcKejADoOo5Q/viewform',
  emailStartPod: 'startapod@apnipathshala.org',
  emailPcSupport: 'pcissue@apnipathshala.org',
  emailCeo: 'sagar@apnipathshala.org',
  emailSaurav: 'saurav@apnipathshala.org',
  phone: '+91 92701 85253',
  whatsapp: 'https://wa.me/919270185253',
  instagram: 'https://www.instagram.com/apnipathshalain/',
  x: 'https://x.com/apnipathshalain',
  facebook: 'https://www.facebook.com/p/Apni-Pathshala-61552800571795/',
  youtube: 'https://www.youtube.com/channel/UClmuHR2MxavpQusA2YdT4bw',
  stories: 'https://www.apnipathshala.org/student-stories/',
  blog: 'https://www.apnipathshala.org/blog/',
} as const

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'What is a POD', to: '/pods' },
  { label: 'Apna PC', to: '/apna-pc' },
  { label: 'Stories', to: '/stories' },
  { label: 'About', to: '/about' },
  { label: 'Start a POD', to: '/start-a-pod' },
  { label: 'Donate', to: '/donate' },
] as const

export const HERO = {
  eyebrow: "India's largest learning POD community",
  title: 'Digital learning for every child, in every corner of India.',
  body:
    'Apni Pathshala is a not-for-profit initiative that sets up community-run digital learning centres — called PODs — and equips them with computers, software, mentorship and a self-paced curriculum. Local people lead them. Students own their learning.',
  quote: 'Small, community-run learning spaces. Digital tools and real mentorship. Local empowerment over central dependency.',
} as const

/** Published on apnipathshala.org (PODs page + LinkedIn). Marked as their figures. */
export const STATS = [
  { value: 100, suffix: '+', label: 'PODs across India', hint: 'Active learning centres' },
  { value: 20, suffix: '+', label: 'States & UTs reached', hint: 'From Nagaland to Kerala' },
  { value: 9000, suffix: '+', label: 'Employment generated', hint: 'As reported by the team' },
  { value: 1000, suffix: '+', label: 'PODs targeted in 3 years', hint: 'To reach 1.5 lakh+ students' },
] as const

export const MISSION = {
  eyebrow: 'Our mission',
  title: 'To give learning opportunities to every child through PODs across India.',
  body:
    'Apni Pathshala aims to launch 1,000+ PODs and reach 1.5 lakh+ students. The ask is simple — refer anyone who might want to start a digital learning centre, or partner with the team to scale POD education in India.',
  note: '“Apni Pathshala exists to fix a broken system from the ground up — not with more exams or big institutions, but with small, community-run learning spaces, digital tools and real mentorship.”',
} as const

export const POD_EXPLAINER = {
  eyebrow: 'The idea',
  title: 'What exactly is a POD?',
  body:
    'A POD — a Point of Digital Learning — is a small, community-based digital learning centre started by a local individual, school or NGO with support from Apni Pathshala. Each one comes with Apna PC computers and ready-to-use learning tools that help students build skills in computer basics, creativity, communication and coding.',
  body2:
    'The Apni Pathshala team supports POD leaders with training, technology and mentorship. The goal is simple: empower local changemakers to bring quality digital education to the students who need it most — whether that is Mumbai, Nagaland, Delhi, or any town or village in between.',
  features: [
    {
      title: '10+ Apna PCs per POD',
      body: 'Pre-installed with educational software, learning tools, AI support and open-source, skill-based content.',
      icon: 'monitor',
    },
    {
      title: 'Run by local leaders',
      body: 'Teachers, NGOs, youth volunteers, retired professionals, parents — even former students.',
      icon: 'users',
    },
    {
      title: 'A real learning environment',
      body: 'Students explore, ask questions, lead and practise real-world skills instead of only reading theory.',
      icon: 'sparkles',
    },
    {
      title: 'Community reach',
      body: 'A community model where PODs share their work and progress with each other and learn from one another.',
      icon: 'share',
    },
  ],
} as const

/** The HEART framework, as published on the Apni Pathshala home page. */
export const HEART = [
  {
    key: 'Hardware',
    icon: 'cpu',
    body: 'The physical infrastructure that makes a learning centre possible.',
    points: [
      '10 computers with peripherals through a 1.5-year zero-cost lease',
      'Support for lab setup and essential classroom infrastructure',
      'Repair and replacement support for operational continuity',
      'UPS support so learning continues through power interruptions',
    ],
  },
  {
    key: 'Exposure',
    icon: 'globe',
    body: 'Opportunities that help students discover technology, projects and new possibilities.',
    points: [
      'A connected learning community of other PODs',
      'Student success stories and achievements showcased publicly',
      'Visibility through blogs, social media and local outreach',
      'Chances to complete certified courses',
    ],
  },
  {
    key: 'Autonomy',
    icon: 'shield',
    body: 'Every POD gradually moves from supported operations towards self-reliance.',
    points: [
      'A clear tier progression path to take greater ownership',
      'Scaling guidance as capacity and impact grow',
      'Teacher-less learning enabled by Eklavya AI and Beyond Exams',
      'Selected PODs supported to open additional centres',
    ],
  },
  {
    key: 'Resources',
    icon: 'layers',
    body: 'The digital tools, curriculum and learning material needed for continuous learning.',
    points: [
      'POD Management System for day-to-day operations',
      'Apni Prerna for 24/7 student safety',
      'Pre-installed educational applications for the classroom',
      'Multiple curriculum options from basic to advanced',
    ],
  },
  {
    key: 'Training & Mentorship',
    icon: 'graduation',
    body: 'Hands-on guidance that keeps a POD running smoothly and effectively.',
    points: [
      'A dedicated admin/mentor for every POD',
      'Basic or advanced curricula tailored to your cluster',
      'Operational guidance on engagement, content and reporting',
      'Peer connection with high-performing, established PODs',
    ],
  },
] as const

export const WHAT_YOU_GET = [
  { count: '10×', label: 'Computer CPUs', detail: 'Linux' },
  { count: '10×', label: 'Monitors', detail: 'New' },
  { count: '10×', label: 'USB webcams', detail: 'New' },
  { count: '10×', label: 'Wired headphones', detail: 'New' },
  { count: '10×', label: 'Keyboard + mouse', detail: 'Wired' },
] as const

export const REQUIREMENTS = [
  { title: 'A dedicated room', body: 'At least 20 ft × 10 ft, owned or rented, for the learning centre.' },
  { title: 'Tables for 10 setups', body: 'Enough surface to hold monitors, keyboards and mice securely.' },
  { title: 'Two sockets per computer', body: 'One for the CPU and one for the monitor — extension cords are fine.' },
  { title: 'Internet of 10 MBPS or more', body: 'Wi-Fi preferred, so students can learn online safely.' },
  { title: 'Manpower for 12+ months', body: 'People familiar with computers, willing to run the centre for at least a year.' },
  { title: 'Willingness to share updates', body: 'Follow the learning plan, send weekly and monthly updates, join the POD community.' },
] as const

export const START_POD_FACTS = [
  {
    q: 'Who can start a POD?',
    a: 'Any individual, organisation or non-profit can apply — teachers, NGOs, youth volunteers, retired professionals, concerned parents, even former students. If you have the space and the intention to bring educational opportunities to your community, Apni Pathshala provides the computers and infrastructure.',
  },
  {
    q: 'Is it hard to get approved?',
    a: 'They review hundreds of applications every month and typically approve about 1 in every 5. A clear space, honest answers and genuine intent matter more than a fancy proposal.',
  },
  {
    q: 'Does a POD pay Apni Pathshala anything?',
    a: 'No. Apni Pathshala does not charge the POD anything, even if the POD starts generating a profit.',
  },
  {
    q: 'Can a POD charge students a fee?',
    a: 'Yes. POD leads are free to charge their learners and Apni Pathshala does not take any part of it — the team actively encourages PODs to monetise so the centre can sustain itself and add more services.',
  },
  {
    q: 'Is the computer donated?',
    a: 'No. The PCs are provided on a 15-month lease under a signed Memorandum of Understanding (MOU). After the lease ends the POD renews the agreement to keep using them.',
  },
  {
    q: 'What about warranty and repairs?',
    a: 'Devices carry a 3-year standard warranty. For claims and technical help, PODs connect with their POD coordinator — or write to pcissue@apnipathshala.org.',
  },
  {
    q: 'Can a POD get more computers later?',
    a: 'Yes, but only after one year of operations. The team evaluates performance and consistency, and if updates and progress meet the standard, more PCs may be added after verification.',
  },
  {
    q: 'What happens after a POD matures?',
    a: 'PODs are granted autonomy once specific criteria and performance metrics are met. Autonomous PODs can experiment, open additional centres, adopt under-performing centres (with mutual agreement) and keep sharing ground-level updates with the community.',
  },
] as const

export const SOFTWARE = [
  { name: 'Shiksha OS', body: 'A restriction-first, distraction-aware, offline-capable learning environment that trains students to self-learn.' },
  { name: 'Apni Prerna', body: '24/7 student safety software — blocks harmful sites, reduces distraction, allows remote admin access and tracks growth.' },
  { name: 'Eklavya AI', body: 'A personalised AI assistant that helps children learn independently, at their own pace.' },
  { name: 'Beyond Exams', body: 'Lets a POD build multiple curricula and run teacher-less classrooms, reducing dependence on traditional teaching.' },
  { name: 'POD Management System', body: 'Track the centre’s growth, share insights and report issues directly to the Apni Pathshala team.' },
  { name: 'Zorin Connect', body: 'Syncs PC and phone for file sharing, notifications and remote control.' },
] as const

export const CREATIVE_TOOLS = [
  'Scratch', 'LibreCAD', 'Fritzing', 'LibreOffice', 'Blender', 'VS Code', 'Arduino IDE', 'Audacity',
] as const

export const APNA_PC = {
  intro:
    'Apna PC is a complete learning ecosystem — a device that adapts to every student’s needs, tracks progress and creates a safe, personalised, engaging learning environment.',
  why: [
    { title: 'Devices, but no structure', body: 'Students had access to computers but no structured path to follow on them.' },
    { title: 'Centres juggling systems', body: 'Learning centres struggled to manage many machines, updates and safety rules.' },
    { title: 'Parents in the dark', body: 'Families had almost no visibility into what their children were actually learning.' },
    { title: 'Weak local infrastructure', body: 'Rural and smaller communities lacked reliable digital learning infrastructure.' },
  ],
  cpu: [
    { k: 'Machine', v: 'Mini PC M710 / M710Q (refurbished)' },
    { k: 'Processor', v: 'Intel Core i3, 7th generation' },
    { k: 'Graphics', v: 'Intel HD Graphics' },
    { k: 'Storage', v: '128 GB SSD' },
    { k: 'Memory', v: '8 GB DDR4' },
    { k: 'Operating system', v: 'Zorin OS / Windows' },
  ],
  inBox: [
    'Monitor with power and display cable — new, 19 inches (48.25 cm)',
    'Keyboard — new',
    'Mouse — new',
    'Webcam — new',
    'Headset — new',
    '65 W adapter',
  ],
  portsFront: ['1 × MIC', '2 × USB 2.0', '1 × headset jack'],
  portsBack: ['1 × VGA', '2 × DP ports', '1 × LAN port', '4 × USB 2.0', '1 × power port'],
} as const

/** Real PODs listed publicly on apnipathshala.org/pods */
export const PODS = [
  { name: 'Gulshan-e-Marhaba Junior High School', state: 'Uttarakhand', lead: 'Sohrab Ali', status: 'Active' },
  { name: 'Bautung Govt. Hr. Sec. School', state: 'Nagaland', lead: 'Mr. Arulmaran Mayathevar', status: 'Active' },
  { name: 'Udaan Foundation School', state: 'Delhi', lead: 'Ms Madhu Suri & Himanshu Garg', status: 'Active' },
  { name: 'ZP School Hiwali', state: 'Maharashtra', lead: 'Mr. Kesav', status: 'Active' },
  { name: 'Standup India Foundation', state: 'Karnataka', lead: 'Praveen', status: 'Active' },
  { name: 'Baptist High School, Jalukie', state: 'Nagaland', lead: '—', status: 'Active' },
  { name: 'PM Shri Govt. Girls Ashram School', state: 'Maharashtra', lead: '—', status: 'Active' },
  { name: 'Zonal Education', state: 'Jammu & Kashmir', lead: 'Mr. Tanveer Ahmed', status: 'Active' },
  { name: 'Holy Angels Academy', state: 'Manipur', lead: 'Armstrong Pema', status: 'Stationary' },
] as const

export const STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Gujarat', 'Haryana', 'Jammu & Kashmir',
  'Jharkhand', 'Karnataka', 'Kerala', 'Maharashtra', 'Manipur', 'Mumbai', 'Nagaland', 'Odisha',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
] as const

export const PARTNERS = [
  'Yusuf Meherally Centre', 'USR Indu Samiti', 'Shri Ganeshnath Maharaj Sansthan', 'Shifting Orbits Foundation',
  'Narayan Chandra Trust', 'Modern Education System & Social Welfare Society', 'Renukiran Welfare Foundation',
  'MakersBox Foundation', 'Learn From Peers', 'KSSD Public Charitable & Welfare Trust', 'Inspire Foundation',
  'Hollistic Education Mission', 'Digital Hub Rewari', 'Christian Grammar School', 'Balvikas Montesorrie School',
  'Li-Fi Foundation', 'Scogo', 'Selligion',
] as const

export const TEAM = [
  {
    name: 'Dr. Aniruddha Malpani',
    role: 'Founder',
    bio: 'Founded Apni Pathshala with a vision to make digital learning accessible to every child, combining technology, community participation and practical education so students can build skills, confidence and better opportunities.',
    photo: '/media/founder-portrait.webp',
    links: { instagram: 'https://www.instagram.com/dranmalpani/', x: 'https://x.com/malpani' },
  },
  {
    name: 'Sagar Tiwari',
    role: 'CEO',
    bio: 'Leads Apni Pathshala with a vision to make digital learning more accessible through strong, community-led learning centres — building sustainable systems, meaningful partnerships and better learning opportunities for students.',
    links: { x: 'https://x.com/DNEWSPAPERGUY', linkedin: 'https://www.linkedin.com/in/sagar-tiwari01/', site: 'https://sagar.apnipathshala.org/' },
  },
  {
    name: 'Aniket Kadam',
    role: 'Chief of Staff',
    bio: 'Supports strategic planning, organisational operations, cross-functional coordination and execution of key initiatives, with a commitment to creating scalable solutions that transform learning experiences.',
    links: { instagram: 'https://www.instagram.com/aniketkadamog/', x: 'https://x.com/aniketkadamOg', linkedin: 'https://www.linkedin.com/in/aniketkadamog/' },
  },
  {
    name: 'Pranav Gorathe',
    role: 'Tech Team Lead',
    bio: 'Leads the technology team that builds and manages the digital systems behind student learning, POD operations and organisational growth.',
    links: { x: 'https://x.com/PranavGorathe', linkedin: 'https://www.linkedin.com/in/pranav-gorathe', site: 'https://pranav.apnipathshala.org/' },
  },
  {
    name: 'Tara Singh Kharwad',
    role: 'Product Engineer',
    bio: 'Product engineer on the Apni Pathshala tech team, connecting platforms into one smooth ecosystem for students and PODs.',
    links: { x: 'https://x.com/tarasi7261/', linkedin: 'https://www.linkedin.com/in/tarasinghkharwad/', site: 'https://tara.apnipathshala.org/' },
  },
  {
    name: 'Ashish Dubey',
    role: 'Marketing & POD Coordinator',
    bio: 'Mass media student, writer, video editor and social media manager. Has served as Tech Lead and POD Coordinator — supporting POD incubation and operations across India, and managing tech-driven partnerships.',
    links: {},
  },
] as const

export const STORIES = [
  { name: 'M.D Hameed Hasan', line: 'The aspiring ethical hacker who became a game developer.', tag: 'Coding' },
  { name: 'Rohit Kumar Verma', line: 'How a rejection led him to a job at the Bank of India.', tag: 'Employment' },
  { name: 'Reshma', line: 'From an orphanage to standing in front of a classroom as a teacher.', tag: 'Teaching' },
  { name: 'Kailas Sudheer', line: 'From class 2 to writing code — an inspiring learning journey.', tag: 'Coding' },
  { name: 'Bithamol', line: 'It’s never too late: how Bithamol mastered tech at 42.', tag: 'Lifelong learning' },
  { name: 'Vishal Pandey', line: 'Vishal’s journey to becoming a front-end developer.', tag: 'Employment' },
  { name: 'Anju', line: 'A homemaker from a rural family, now digitally empowered.', tag: 'Digital literacy' },
  { name: 'Kriti Mishra', line: 'What happens when a child finally gets digital access?', tag: 'Access' },
  { name: 'Shagun Rai', line: 'From a complete digital beginner to an MS-CIT aspirant.', tag: 'Digital literacy' },
  { name: 'Divyanshu Pandey', line: 'From rejection to selection — the journey of Divyanshu Pandey.', tag: 'Confidence' },
  { name: 'Kashish Shrivastav', line: 'From fields to tech: the Kashish Shrivastav story.', tag: 'Access' },
  { name: 'Anchal', line: 'When parents become learners for their child’s future.', tag: 'Families' },
] as const

export const FAQ = [
  {
    q: 'Is this the official Apni Pathshala website?',
    a: 'No — and this is important. This is an unofficial, student-made redesign concept built as a design and coding exercise. It is not affiliated with, endorsed by or operated by Apni Pathshala. All facts are transcribed from their public pages, and every donation question is routed straight back to the real team. The official website is apnipathshala.org.',
  },
  {
    q: 'Can I donate money on this website?',
    a: 'No. This website has no payment link, no UPI ID, no bank details and no donation form. If you want to support Apni Pathshala, please contact the real team directly using the details on the Donate page.',
  },
  {
    q: 'Then why does this website exist?',
    a: 'A student built it to practise modern web design and to show the Apni Pathshala team what a fresh, polished version of their site could look like — in the hope of contributing, interning or simply starting a conversation.',
  },
  {
    q: 'Is the content accurate?',
    a: 'Everything is transcribed from Apni Pathshala’s public pages and social profiles, including their published impact numbers, POD listings, team roles and programme details. Even so, always verify anything important at apnipathshala.org before acting on it.',
  },
  {
    q: 'How do I actually start a POD?',
    a: 'Apply through Apni Pathshala’s official form, or email startapod@apnipathshala.org. You need a room of at least 20 ft × 10 ft, tables for 10 computers, two sockets per computer, 10 MBPS+ internet and people committed to running it for at least a year.',
  },
  {
    q: 'What do I get if my POD is approved?',
    a: '10 CPUs with Linux, 10 monitors, 10 webcams, 10 wired headsets and 10 keyboard + mouse sets on a 15-month zero-cost lease, plus curriculum, mentorship, a POD management system, Apni Prerna safety software and Eklavya AI.',
  },
] as const
