/* =====================================================================
   data.js  —  EDIT THIS FILE to update your portfolio.
   You never need to touch index.html to add a project, tool,
   hackathon or learning topic. Save the file and refresh the browser.
   ===================================================================== */

/* ---------- Site settings ---------- */
const SITE = {
  // Contact form: paste a Formspree (or similar) endpoint here later,
  // e.g. "https://formspree.io/f/xxxxxxx". While this is empty, the form
  // opens your email app with the message pre-filled instead.
  formEndpoint: "",
  email: "khudabuxmahar912@gmail.com",
};

/* ---------- Projects ----------
   To add a project: copy one block, paste it at the end, change the values.
   Leave githubUrl / liveUrl / detailsUrl as "" until they exist — the card
   will show a disabled "coming soon" button instead of a broken link.
   status examples: "Hackathon project", "In progress", "Completed"
*/
const PROJECTS = [
  {
    name: "SIPA OS / SIPA Signal",
    category: "AI application",
    description:
      "An AI and text-processing project built during the WeAreDevelopers Hackathon 2026. It identifies unnecessary filler and hedge language in text and turns the meaningful information into structured signals.",
    technologies: ["AI", "Text processing", "Hackathon build"],
    features: [
      "Detects filler and hedge language in text",
      "Converts meaningful content into structured signals",
      "Built as a team during WeAreDevelopers Hackathon 2026",
    ],
    status: "Hackathon project",
    githubUrl: "", // e.g. "https://github.com/khudabuxmahar912-prog/sipa-os"
    liveUrl: "",
    detailsUrl: "",
    image: "",
  },
  {
    name: "NASA Space Apps Challenge 2026",
    category: "AI + Earth observation",
    description:
      "Took part in NASA Space Apps Challenge 2026 and worked on an AI-powered Earth and disaster intelligence concept. It looks at how Earth observation and satellite-related data can help people understand environmental change and possible disaster risks.",
    technologies: ["AI", "Earth observation data", "Disaster risk analysis"],
    features: [
      "Uses satellite-related data to study environmental change",
      "Aimed at understanding potential disaster risks",
      "Developed as a team concept for the challenge",
    ],
    status: "Challenge concept",
    githubUrl: "",
    liveUrl: "",
    detailsUrl: "#hackathons", // jumps to the Hackathons section until a page exists
    image: "",
  },
];

/* Categories shown on the "More projects coming soon" card */
const FUTURE_CATEGORIES = [
  "AI applications",
  "Web applications",
  "AI agents",
  "AI automation",
  "API integrations",
  "Full-stack apps",
  "Data / ML projects",
  "Robotics software",
];

/* ---------- Skills I'm learning and exploring ----------
   Move an item into the "Current skills" cards in index.html once you're
   comfortable with it. Keep this list honest and current.
*/
const LEARNING = [
  "Backend development",
  "Full-stack web development",
  "Generative AI",
  "AI agents",
  "RAG and AI-powered applications",
  "AI automation",
];

const EXPLORING = [
  "AI-assisted development tools",
  "Automation workflows",
  "Robotics and software",
  "Working with APIs in larger projects",
];

/* ---------- Tools & technologies ----------
   status: "using" or "learning"
*/
const TOOLS = [
  { name: "HTML", note: "Markup", status: "using" },
  { name: "CSS", note: "Styling", status: "using" },
  { name: "JavaScript", note: "Web language", status: "using" },
  { name: "Python", note: "Programming", status: "using" },
  { name: "Java", note: "Programming", status: "using" },
  { name: "C++", note: "Programming", status: "using" },
  { name: "Git", note: "Version control", status: "using" },
  { name: "GitHub", note: "Code hosting", status: "using" },
  { name: "VS Code", note: "Editor", status: "using" },
  { name: "GitHub Copilot", note: "AI assistant", status: "using" },
  { name: "APIs", note: "Integration", status: "learning" },
  { name: "AI / ML tools", note: "Machine learning", status: "learning" },
  { name: "Generative AI", note: "AI applications", status: "learning" },
  { name: "AI automation tools", note: "Workflows", status: "learning" },
];

/* ---------- Hackathons & experience ----------
   type: "Hackathon" | "Competition" | "Open source" | "Certification" |
         "Internship" | "Freelance"
   Add new entries at the TOP so the newest shows first.
*/
const EXPERIENCE = [
  {
    type: "Hackathon certificate",
    title: "IBM Bob 2.0 Hackathon",
    meta: "Certificate",
    description:
      "Certificate from the IBM Bob 2.0 Hackathon. Use the button below to view it.",
    fileUrl: "assets/images/IBM Bob 2.0 Hackathon.jpeg",
  },
  {
    type: "Hackathon",
    title: "WeAreDevelopers Hackathon 2026",
    meta: "Built SIPA OS / SIPA Signal",
    description:
      "Participated in the hackathon and worked with a team on SIPA OS / SIPA Signal, a project that reduces filler and hedge language in text and turns useful information into structured signals.",
  },
  {
    type: "Hackathon",
    title: "NASA Space Apps Challenge 2026",
    meta: "AI Earth and disaster intelligence concept",
    description:
      "Participated in the challenge and worked on an AI-powered concept that uses Earth observation and satellite-related data to understand environmental changes and potential disaster risks.",
  },
];

/* Categories that appear as "nothing here yet" slots under the list */
const EXPERIENCE_SLOTS = [
  "Competitions",
  "Open-source contributions",
  "Certifications",
  "Internships",
  "Freelance projects",
];

/* ---------- Learning journey ----------
   No dates on purpose. Reorder or add steps whenever your path changes.
*/
const JOURNEY = [
  {
    track: "Web development",
    steps: ["Frontend", "Backend", "APIs", "Full stack"],
  },
  {
    track: "Artificial intelligence",
    steps: ["Python", "ML fundamentals", "Generative AI", "AI agents", "AI automation"],
  },
  {
    track: "Software engineering",
    steps: ["Programming", "OOP", "Data structures & algorithms", "Git and GitHub", "Software projects"],
  },
];