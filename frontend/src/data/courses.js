const courses = [
  {
    id: "CSE1001",
    name: "Introduction to Computer Science",
    img: "https://example.com/cs.jpg",
    description: "Learn the fundamentals of computer science and programming.",
    details: [
      "Suitable for beginners",
      "Covers programming basics",
      "Includes hands-on coding exercises",
      "Explores algorithms and data structures",
      "No prior coding experience required",
    ],
  },
  {
    id: "WEB2001",
    name: "Web Development",
    img: "https://example.com/webdev.jpg",
    description: "Build dynamic websites using HTML, CSS, and JavaScript.",
    details: [
      "Covers front-end and back-end development",
      "Hands-on projects to create interactive web pages",
      "Learn modern web development frameworks",
      "Includes responsive design techniques",
      "Prerequisite: Basic knowledge of HTML, CSS, and JavaScript",
    ],
  },
  {
    id: "CSE3001",
    name: "Data Science",
    img: "https://example.com/datascience.jpg",
    description:
      "Discover insights from data using Python and statistical techniques.",
    details: [
      "Introduction to data analysis and visualization",
      "Hands-on experience with data manipulation",
      "Explore statistical modeling and machine learning",
      "Utilize popular data science libraries",
      "Prerequisite: Basic knowledge of Python programming",
    ],
  },
  {
    id: "WEB4001",
    name: "Mobile App Development",
    img: "https://example.com/mobileapp.jpg",
    description: "Create mobile apps for iOS and Android using React Native.",
    details: [
      "Build native mobile apps with JavaScript",
      "Learn React Native framework",
      "Includes UI design and navigation",
      "Integrate with device features and APIs",
      "Prerequisite: Basic knowledge of JavaScript and React",
    ],
  },
  {
    id: "CSE5001",
    name: "Artificial Intelligence",
    img: "https://example.com/ai.jpg",
    description: "Explore the world of AI and machine learning algorithms.",
    details: [
      "Introduction to AI concepts and techniques",
      "Hands-on projects using machine learning algorithms",
      "Natural language processing and computer vision",
      "Utilize popular AI libraries and frameworks",
      "Prerequisite: Basic knowledge of programming and math",
    ],
  },
  {
    id: "WEB6001",
    name: "Graphic Design",
    img: "https://example.com/graphicdesign.jpg",
    description:
      "Learn to design stunning visuals using industry-standard tools.",
    details: [
      "Introduction to graphic design principles",
      "Hands-on projects to create visually appealing designs",
      "Learn popular design software and tools",
      "Typography, color theory, and layout techniques",
      "No prior design experience required",
    ],
  },
  {
    id: "MGT7001",
    name: "Digital Marketing",
    img: "https://example.com/digitalmarketing.jpg",
    description: "Master the art of promoting products and services online.",
    details: [
      "Fundamentals of digital marketing strategies",
      "Social media marketing and advertising",
      "Search engine optimization (SEO) techniques",
      "Email marketing and content creation",
      "Prerequisite: Basic understanding of marketing principles",
    ],
  },
  {
    id: "MGT8001",
    name: "Business Management",
    img: "https://example.com/businessmanagement.jpg",
    description:
      "Develop essential skills to manage and lead successful businesses.",
    details: [
      "Principles of effective business management",
      "Strategic planning and decision-making",
      "Financial management and budgeting",
      "Human resource management",
      "No prior management experience required",
    ],
  },
  {
    id: "CSE9001",
    name: "Computer Networks",
    img: "https://example.com/computernetworks.jpg",
    description:
      "Learn about the principles and protocols of computer networks.",
    details: [
      "Introduction to network architecture and protocols",
      "Hands-on experience with network configuration",
      "Network security and troubleshooting",
      "Prerequisite: Basic understanding of computer systems",
    ],
  },
  {
    id: "CSE1002",
    name: "Software Engineering",
    img: "https://example.com/softwareengineering.jpg",
    description:
      "Learn the processes and techniques for building software systems.",
    details: [
      "Software development life cycle",
      "Requirements analysis and design principles",
      "Testing and quality assurance",
      "Collaborative software development",
      "Prerequisite: Basic programming knowledge",
    ],
  },
  {
    id: "CSE2002",
    name: "Database Management",
    img: "https://example.com/databasemanagement.jpg",
    description: "Master the concepts and tools for managing databases.",
    details: [
      "Relational database design and modeling",
      "SQL programming and query optimization",
      "Database administration and security",
      "Data backup and recovery strategies",
      "Prerequisite: Basic understanding of data organization",
    ],
  },
  {
    id: "WEB3002",
    name: "Front-end Web Development",
    img: "https://example.com/front-endwebdev.jpg",
    description:
      "Create interactive web interfaces using modern front-end technologies.",
    details: [
      "HTML, CSS, and JavaScript for web development",
      "Responsive web design and cross-browser compatibility",
      "Front-end frameworks and libraries",
      "User interface (UI) and user experience (UX) design",
      "Prerequisite: Basic knowledge of web technologies",
    ],
  },
  {
    id: "MGT4002",
    name: "Project Management",
    img: "https://example.com/projectmanagement.jpg",
    description: "Learn to plan, execute, and monitor projects effectively.",
    details: [
      "Project planning and scheduling",
      "Resource allocation and risk management",
      "Team collaboration and communication",
      "Project monitoring and evaluation",
      "No prior project management experience required",
    ],
  },
  {
    id: "CSE5002",
    name: "Machine Learning",
    img: "https://example.com/machinelearning.jpg",
    description:
      "Explore advanced algorithms and techniques for machine learning.",
    details: [
      "Supervised and unsupervised learning algorithms",
      "Model evaluation and optimization",
      "Deep learning and neural networks",
      "Real-world applications of machine learning",
      "Prerequisite: Basic understanding of statistics and programming",
    ],
  },
  {
    id: "WEB6002",
    name: "User Experience (UX) Design",
    img: "https://example.com/uxdesign.jpg",
    description: "Design intuitive and user-friendly digital experiences.",
    details: [
      "User research and personas",
      "Information architecture and wireframing",
      "Prototyping and user testing",
      "Usability principles and best practices",
      "No prior design experience required",
    ],
  },
  {
    id: "MGT7002",
    name: "Leadership and Team Management",
    img: "https://example.com/leadership.jpg",
    description: "Develop leadership skills and effectively manage teams.",
    details: [
      "Leadership styles and theories",
      "Team building and motivation",
      "Conflict resolution and decision-making",
      "Effective communication and delegation",
      "No prior leadership experience required",
    ],
  },
  {
    id: "MGT8002",
    name: "Strategic Marketing",
    img: "https://example.com/strategicmarketing.jpg",
    description: "Create and implement effective marketing strategies.",
    details: [
      "Market research and analysis",
      "Segmentation and targeting",
      "Brand positioning and messaging",
      "Marketing mix and campaign planning",
      "Prerequisite: Basic understanding of marketing principles",
    ],
  },
  {
    id: "CSE9002",
    name: "Operating Systems",
    img: "https://example.com/operatingsystems.jpg",
    description:
      "Learn about the principles and functions of operating systems.",
    details: [
      "Operating system structures and components",
      "Process management and scheduling",
      "Memory management and file systems",
      "Concurrency and synchronization",
      "Prerequisite: Basic understanding of computer architecture",
    ],
  },
  {
    id: "CSE1003",
    name: "Algorithms and Data Structures",
    img: "https://example.com/algorithms.jpg",
    description:
      "Study efficient algorithms and data structures for problem-solving.",
    details: [
      "Analysis of algorithms",
      "Data structures and their implementations",
      "Sorting and searching algorithms",
      "Graph algorithms and dynamic programming",
      "Prerequisite: Basic programming knowledge",
    ],
  },
  {
    id: "WEB2003",
    name: "Full Stack Web Development",
    img: "https://example.com/fullstackwebdev.jpg",
    description:
      "Build end-to-end web applications using front-end and back-end technologies.",
    details: [
      "Front-end technologies (HTML, CSS, JavaScript)",
      "Back-end frameworks (Node.js, Django, etc.)",
      "Database integration and RESTful APIs",
      "Deployment and server administration",
      "Prerequisite: Intermediate knowledge of web development",
    ],
  },
  {
    id: "MGT3003",
    name: "Business Analytics",
    img: "https://example.com/businessanalytics.jpg",
    description: "Utilize data analysis to make informed business decisions.",
    details: [
      "Data visualization and exploratory analysis",
      "Descriptive and predictive analytics",
      "Statistical modeling and forecasting",
      "Business intelligence tools and techniques",
      "Prerequisite: Basic understanding of statistics",
    ],
  },
  {
    id: "CSE4003",
    name: "Computer Graphics",
    img: "https://example.com/computergraphics.jpg",
    description:
      "Explore the creation and manipulation of visual content in computer systems.",
    details: [
      "2D and 3D graphics programming",
      "Rendering techniques and shaders",
      "Computer animation and modeling",
      "Interactive graphics applications",
      "Prerequisite: Basic understanding of linear algebra",
    ],
  },
  {
    id: "WEB5003",
    name: "Responsive Web Design",
    img: "https://example.com/responsivewebdesign.jpg",
    description:
      "Create websites that adapt to different screen sizes and devices.",
    details: [
      "Fluid layouts and flexible grids",
      "Media queries and breakpoints",
      "Mobile-first and responsive design principles",
      "Testing and optimization for various devices",
      "Prerequisite: Basic knowledge of HTML and CSS",
    ],
  },
  {
    id: "MGT6003",
    name: "Financial Management",
    img: "https://example.com/financialmanagement.jpg",
    description:
      "Learn financial analysis and management techniques for businesses.",
    details: [
      "Financial statement analysis",
      "Capital budgeting and investment analysis",
      "Risk management and financial planning",
      "Financial markets and instruments",
      "Prerequisite: Basic understanding of accounting principles",
    ],
  },
  {
    id: "CSE7003",
    name: "Natural Language Processing",
    img: "https://example.com/naturallanguageprocessing.jpg",
    description:
      "Explore algorithms for understanding and processing human language.",
    details: [
      "Text preprocessing and tokenization",
      "Language modeling and sentiment analysis",
      "Part-of-speech tagging and named entity recognition",
      "Machine translation and question answering",
      "Prerequisite: Basic knowledge of machine learning",
    ],
  },
  {
    id: "WEB8003",
    name: "E-commerce Development",
    img: "https://example.com/ecommercedevelopment.jpg",
    description:
      "Build online shopping platforms and manage e-commerce websites.",
    details: [
      "E-commerce platform setup and configuration",
      "Product catalog management",
      "Payment gateway integration",
      "Order fulfillment and customer management",
      "Prerequisite: Basic knowledge of web development",
    ],
  },
  {
    id: "MGT9003",
    name: "Strategic Leadership",
    img: "https://example.com/strategicleadership.jpg",
    description:
      "Develop leadership skills and strategies to drive organizational success.",
    details: [
      "Visionary leadership and strategic thinking",
      "Organizational change management",
      "Ethical leadership and corporate social responsibility",
      "Strategic decision-making and implementation",
      "Prerequisite: Prior leadership or management experience",
    ],
  },
  {
    id: "CSE1004",
    name: "Cybersecurity",
    img: "https://example.com/cybersecurity.jpg",
    description:
      "Learn to protect computer systems and networks from cyber threats.",
    details: [
      "Network security and cryptography",
      "Secure software development practices",
      "Security assessment and penetration testing",
      "Incident response and threat intelligence",
      "Prerequisite: Basic understanding of computer networks",
    ],
  },
  {
    id: "WEB2004",
    name: "Content Management Systems",
    img: "https://example.com/cms.jpg",
    description:
      "Build websites and manage content using popular CMS platforms.",
    details: [
      "CMS installation and setup",
      "Content creation and management",
      "Customization and theme development",
      "SEO and performance optimization",
      "Prerequisite: Basic knowledge of web development",
    ],
  },
  {
    id: "MGT3004",
    name: "Human Resource Management",
    img: "https://example.com/humanresourcemanagement.jpg",
    description:
      "Learn strategies for attracting, developing, and retaining talent.",
    details: [
      "Recruitment and selection processes",
      "Employee training and development",
      "Performance management and appraisal",
      "Employee relations and HR policies",
      "No prior HR management experience required",
    ],
  },
  {
    id: "CSE4004",
    name: "Computer Vision",
    img: "https://example.com/computervision.jpg",
    description:
      "Explore the theory and applications of computer vision algorithms.",
    details: [
      "Image processing and feature extraction",
      "Object recognition and tracking",
      "Image segmentation and depth estimation",
      "Applications in robotics and augmented reality",
      "Prerequisite: Basic knowledge of image processing",
    ],
  },
  {
    id: "WEB5004",
    name: "Search Engine Optimization",
    img: "https://example.com/seo.jpg",
    description:
      "Optimize websites to improve search engine rankings and visibility.",
    details: [
      "Keyword research and on-page optimization",
      "Link building and off-page SEO techniques",
      "Technical SEO and website performance",
      "SEO analytics and tracking",
      "Prerequisite: Basic understanding of web development and marketing",
    ],
  },
  {
    id: "MGT6004",
    name: "Supply Chain Management",
    img: "https://example.com/supplychainmanagement.jpg",
    description: "Learn to optimize and manage the flow of goods and services.",
    details: [
      "Supply chain design and network optimization",
      "Inventory management and logistics",
      "Supplier relationship management",
      "Sustainable supply chain practices",
      "No prior supply chain management experience required",
    ],
  },
  {
    id: "CSE7004",
    name: "Big Data Analytics",
    img: "https://example.com/bigdataanalytics.jpg",
    description: "Analyze and derive insights from large and complex datasets.",
    details: [
      "Data preprocessing and cleaning",
      "Data visualization and exploratory analysis",
      "Statistical analysis and predictive modeling",
      "Big data tools and distributed computing",
      "Prerequisite: Basic understanding of data analysis and programming",
    ],
  },
  {
    id: "WEB8004",
    name: "Web Accessibility",
    img: "https://example.com/webaccessibility.jpg",
    description:
      "Design and develop websites that are accessible to all users.",
    details: [
      "Web accessibility standards and guidelines",
      "Screen reader compatibility and keyboard navigation",
      "Designing for color blindness and visual impairments",
      "Testing and auditing for accessibility compliance",
      "Prerequisite: Basic knowledge of HTML, CSS, and JavaScript",
    ],
  },
  {
    id: "MGT9004",
    name: "International Business",
    img: "https://example.com/internationalbusiness.jpg",
    description:
      "Understand the complexities of global business operations and strategies.",
    details: [
      "Global market entry and expansion",
      "International trade and logistics",
      "Cultural and legal considerations",
      "Global supply chain and distribution",
      "Prerequisite: Basic understanding of business principles",
    ],
  },
  {
    id: "CSE1101",
    name: "Introduction to Cybersecurity",
    img: "https://example.com/introcybersecurity.jpg",
    description: "Gain an overview of cybersecurity principles and practices.",
    details: [
      "Overview of cybersecurity concepts and terminology",
      "Common threats and vulnerabilities",
      "Principles of secure network communication",
      "Introduction to cryptography",
      "Prerequisite: Basic understanding of computer systems",
    ],
  },
];

export default courses;
