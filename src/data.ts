export const profile = {
  name: "Shirisha Nenta",
  title: "Full-Stack Developer & AI/ML Engineer",
  tagline: "Building the creative + intelligent universe.",
  location: "Hyderabad, Telangana, India",
  phone: "+91 8688057069",
  email: "nshirisha1712@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/shirisha-nenta-18aa90306/",
    github: "https://github.com/NentaShirisha",
    leetcode: "https://leetcode.com",
  },
  summary:
    "Computer Science graduate from RGUKT Basar with production experience at ILURA AI and strong expertise in Full-Stack Development, Machine Learning, and Data Engineering. Skilled in Python, React, Django, TensorFlow, PySpark, and cloud-based development workflows. Delivered 10+ academic and industry-focused projects across AI/ML, NLP, recommendation systems, and web development.",
};

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Django", "Flask", "REST APIs"],
  },
  {
    title: "AI/ML & Data Science",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "Recommendation Systems",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Transformers",
    ],
  },
  {
    title: "Data Engineering",
    skills: ["PySpark", "Data Pipelines", "ETL Concepts"],
  },
  {
    title: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Feature Engineering"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "GitHub Actions", "VS Code", "Claude AI"],
  },
];

// Icon keys map to lucide-react components rendered in the hero orbit.
export const orbitIcons = [
  "Code2",
  "Brain",
  "Database",
  "GitBranch",
  "Container",
  "LayoutGrid",
  "Server",
  "BarChart3",
  "Bot",
  "Sparkles",
  "Cpu",
] as const;

export const experience = [
  {
    role: "Frontend Developer → Part-Time Developer",
    company: "ILURA AI, UAE (Remote)",
    period: "Jul 2025 – Present",
    bullets: [
      "Built and maintained responsive user interfaces using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.",
      "Integrated frontend applications with REST APIs and supported deployment workflows using Docker, Node.js, Git, and GitHub Actions.",
    ],
  },
  {
    role: "Academic Project Consultant",
    company: "Freelance",
    period: "Oct 2025 – Present",
    bullets: [
      "Delivered 10+ end-to-end projects in AI/ML, Data Engineering, NLP, and Full-Stack Development.",
      "Developed ML/DL solutions, PySpark pipelines, and Django/Flask/React applications tailored to client requirements.",
    ],
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "Parmy Technologies Private Limited",
    period: "May 2025 – Jun 2025",
    bullets: [
      "Built machine learning and deep learning models for classification, recommendation systems, NLP, and time-series forecasting.",
      "Improved model performance through hyperparameter tuning and evaluation using precision, recall, and F1-score metrics.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tech: string[];
  summary: string;
  bullets: string[];
  hue: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    id: "emotion-music",
    title: "Emotion-Based Music Recommendation System",
    tech: ["Python", "Django", "NLP"],
    summary:
      "An NLP-powered recommendation system that detects user emotions and recommends personalized music in real time.",
    bullets: [
      "Developed an NLP-powered recommendation system that detects user emotions and recommends personalized music in real time.",
      "Integrated emotion classification and recommendation pipelines using Python and Django.",
    ],
    hue: "#ff4d2e",
  },
  {
    id: "image-captioning",
    title: "Image Captioning & Translation with Audio",
    tech: ["Flask", "BLIP", "Transformers"],
    summary:
      "A deep learning system that generates image captions, translates them into multiple languages, and narrates them aloud.",
    bullets: [
      "Built a deep learning system that generates image captions, translates them into multiple languages, and provides audio narration.",
      "Enhanced accessibility for visually impaired users through multilingual speech output.",
    ],
    hue: "#ff8a3d",
    repo: "https://github.com/NentaShirisha/Image_Captioning_And_Translation_With_Audio",
  },
  {
    id: "health-monitoring",
    title: "Live Health Monitoring System",
    tech: ["Python", "Django", "Machine Learning"],
    summary:
      "A real-time health monitoring dashboard using machine learning-based anomaly detection.",
    bullets: [
      "Developed a real-time health monitoring dashboard using machine learning-based anomaly detection.",
      "Implemented automated alerts for abnormal vital readings and health metrics.",
    ],
    hue: "#ff2e5f",
    repo: "https://github.com/NentaShirisha/health_monitoring",
  },
];

// Additional public repositories pulled from github.com/NentaShirisha,
// shown as a lighter-weight "more builds" strip beneath the flagship projects.
export type Repo = {
  name: string;
  language: string;
  slug: string;
};

export const githubRepos: Repo[] = [
  { name: "ICSBIT Labs Assessment", language: "HTML", slug: "ICSBIT_LABS_Assessment" },
  { name: "Real-Time Financial Fraud Detection System", language: "Jupyter Notebook", slug: "Real-Time-Financial-Fraud-Detection-System" },
  { name: "Farmer Route", language: "HTML", slug: "Farmer_Route" },
  { name: "AI Personal Assistance", language: "Python", slug: "AI_Personal_Assisstance" },
  { name: "Finance Data Processing & Access Control Backend (Zorvyn)", language: "Python", slug: "Finance-Data-Processing-and-Access-Control-Backend-Zorvyn" },
  { name: "AI Vision Studio", language: "Python", slug: "AI_Vision_Studio" },
  { name: "Sri Shakthi Motors Bajaj", language: "Python", slug: "Sri_Shakthi_Motors_Bajaj" },
  { name: "Medicine Recommendation System", language: "Jupyter Notebook", slug: "Medicine-Recommendation-System" },
  { name: "3D Body Condition Scoring — CV Pain Assessment", language: "Python", slug: "3D-Body-Condition-Scoring-Computer-Vision-Pain-Assessment" },
  { name: "Predictive Demand Forecasting & Automated Reorder", language: "Python", slug: "Predictive-Demand-Forecasting-Automated-Reorder" },
  { name: "AI Chatbot", language: "JavaScript", slug: "AI_Chatbot" },
  { name: "Ayurvedic Platform", language: "JavaScript", slug: "ayurvedic-platform" },
  { name: "Student Portal System", language: "HTML", slug: "Student-Portal-System" },
  { name: "Music Player", language: "JavaScript", slug: "Music-Player" },
  { name: "ML Lab", language: "Jupyter Notebook", slug: "ML_LAB" },
];

export const certifications = [
  "Participated in the Cognizant Aston Martin F1 Hackathon",
  "Python Certification – HackerRank",
  "Artificial Intelligence and Machine Learning – LinkedIn Learning",
];

export const educationList = [
  {
    school: "Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar",
    degree: "Pre-University Course (PUC)",
    period: "Jun 2020 – Oct 2022",
    cgpa: "9.1/10",
  },
  {
    school: "Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar",
    degree: "B.Tech in Computer Science Engineering",
    period: "Dec 2022 – Apr 2026",
    cgpa: "8.5/10",
  },
];
