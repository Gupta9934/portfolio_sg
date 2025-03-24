import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saiyam Gupta",
  initials: "SG",
  url: "https://portfolio-3l8lc1ao8-gupta9934s-projects.vercel.app/",
  location: "Bengaluru, INDIA",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  "description": "Software Engineer. I love building things and helping people. Very active on LinkedIn.",
  summary: `
  • Results-driven IT professional with a Bachelor's in Technology and a track record of academic excellence.
   
  • Skilled in JAVA, Python, AI/ML, and Backend development (DSA, OOPs). Proven success developing high-end models and architecture & model analysis time and enhancing workflow efficiency.
   
  • Recognized for academic achievements, and high scores in competitive exams. Strong moral values, quick learner, and adept problem solver. Ready to bring my skills and motivation to dynamic IT environments.
  `, avatarUrl: "/img12.png", skills: [
    "Python",
    "Java",
    "SpringBoot",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Machine Learning",
    "AI",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C/C++",
    "Prompt Engineering"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@saiyam9934gupta", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saiyam9934gupta@gmail.com",
    tel: "+91 8967310195",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Gupta9934",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saiyam9934/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/saiyam9934gupta?s=08",
        icon: Icons.x,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/saiyam9934/",
        icon: Icons.leetcode,  // You may need to add the appropriate LeetCode icon to your Icons component
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/saiyam.gupta.16/",
        icon: Icons.facebook,  // You may need to add the Facebook icon to your Icons component
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.facebook.com/saiyam.gupta.16/",
        icon: Icons.instagram,  // You may need to add the Instagram icon to your Icons component
        navbar: true,
      },
      // Medium: {
      //   name: "Medium",
      //   url: "https://medium.com/@saiyam9934",
      //   icon: Icons.medium,  // You may need to add the Medium icon to your Icons component
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:saiyam9934gupta@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },


  work: [
    {
      company: "AxCrypt Software Pvt. Ltd. ",
      href: "https://axcrypt.net/",
      badges: [],
      location: "Bengaluru, INDIA",
      title: "Technical Lead Developer",
      logoUrl: "/Axcrypt.png",
      start: "December 2024",
      end: "Present",
      description: `
  • Innovative Technical Lead with extensive experience in designing, developing, and deploying complex software solutions.
   
  • Skilled in leading cross-functional teams, managing project lifecycles, optimizing performance, and ensuring system reliability.
   
  • Proficient in backend/frontend technologies, cloud services, AI/ML, and DevOps.
   
  • Experienced in mentoring developers, fostering collaboration, and driving technical excellence in fast-paced environments.
   
  • Expertise includes backend systems, RESTful APIs, cloud integration, frontend development with React/TypeScript.
   
  • Managed CI/CD pipelines, database management, and stakeholder communication.`,
    },
    {
      company: "Technowell Enterprise Services Pvt. Ltd.",
      badges: [],
      href: "https://www.technowell.org.in/",
      location: "Hyderabad, INDIA",
      title: "Lead Geospatial Data Engineer",
      logoUrl: "/Technowell.png",
      start: "January 2024",
      end: "December 2024",
      description: `
  • Experienced in managing large-scale geospatial datasets and developing advanced machine learning models.
   
  • Focus on deploying full-scale AI solutions in production environments.
   
  • Highly proficient in CI/CD processes, version control, and production-level deployments.
   
  • Leveraged deep expertise in Linux systems to ensure stable, efficient operations.
   
  • Achieved up to 80% improvements in model efficiency and performance through automation and optimization.
   
  • Skilled in designing and developing scalable backend APIs and managing complex data pipelines.
   
  • Created intuitive GIS applications delivering actionable, data-driven insights.`,
    },
    {
      company: "KPIT Technologies Pvt. Ltd.",
      href: "https://www.kpit.com/",
      badges: [],
      location: "Pune, INDIA",
      title: "Software Engineer Intern",
      logoUrl: "/KPIT.png",
      start: "June 2023",
      end: "December 2023",
      description: `
  • Worked closely with the iDart team to revolutionize vehicle diagnostic and testing systems.
   
  • Contributed to significant improvements in both performance and user experience.
   
  • Designed and implemented highly efficient backend system using Java Spring Boot.
   
  • Ensured seamless data processing and real-time diagnostics.
   
  • Developed intuitive and visually engaging GUI using AngularJS.
   
  • Created streamlined, scalable solution that enhanced operational efficiency.
   
  • Set new standards for vehicle diagnostics approach in the industry.`,
    },
    {
      company: "Celebal Technologies",
      href: "https://celebaltech.com/",
      badges: [],
      location: "Remote",
      title: "Data Science Intern",
      logoUrl: "/celebal.png",
      start: "April 2023",
      end: "June 2023",
      description: `
  • Transformed complex datasets into actionable insights for business decisions.
   
  • Built and deployed machine learning models for predictive analytics.
   
  • Utilized Python for data wrangling, statistical analysis, and algorithm development.
   
  • Optimized data pipelines and implemented feature engineering techniques.
   
  • Applied advanced statistical methods to uncover hidden patterns and trends.
   
  • Leveraged data visualization tools (Tableau, Power BI) for effective stakeholder communication.
   
  • Maintained strong focus on data quality, accuracy, and model performance.`,
    },
  ],
  education: [
    {
      school: "Kalinga Institute of Industrial Technology",
      href: "https://kiit.ac.in/",
      degree: "Bachelors of Technology (B.Tech), Computer Science & Engineering, 8.63 CGPA",
      logoUrl: "/kiit.png",
      start: "2021",
      end: "2024",
    },
    {
      school: "KIIT Polytechnic",
      href: "https://kp.kiit.ac.in/",
      degree: "Technical Diploma, Electronics & Telecommunicatioin, 90.8%",
      logoUrl: "/kiit.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "North Point English Academy",
      href: "https://northpointenglishacademy.org/",
      degree: "Matriculation, ICSE , 89.8%",
      logoUrl: "/northpoint.png",
      start: "2007",
      end: "2018",
    },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "AI-Voice Assistant",
      href: "https://github.com/Gupta9934/AI-Voice-Assistant",
      dates: "Nov 2022 - Feb 2023",
      active: true,
      description:
        "AI Voice Assistant project aims to revolutionize everyday interactions by providing seamless, intuitive, and efficient voice commands. From managing tasks to answering queries, it enhances productivity and convenience, making life simpler with cutting-edge technology at your fingertips.",
      technologies: [
        "Next.Js",
        "Typescript",
        "PostgreSQL",
        "Python",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Gupta9934/AI-Voice-Assistant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "3D website using ReatJS",
      href: "https://gupta9934.github.io/I-Phone/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "Create stunning 3D websites using React.js and Three.js. Integrate interactive graphics, animations, and dynamic content to enhance user experiences. With React's flexibility and Three.js's powerful 3D rendering capabilities, you can build visually immersive, responsive web applications.",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gupta9934.github.io/I-Phone/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Gupta9934/I-Phone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Loan Prediction Model",
      href: "https://github.com/Gupta9934/Loan_Prediction_Model",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "Developed an open-source a loan prediction model using machine learning to assess applicants' eligibility based on historical data. By analyzing factors like income, credit score, and loan history, this model predicts approval chances, helping financial institutions make data-driven, efficient lending decisions.",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Anaconda",
        "Typescript",
        "PostgreSQL",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Gupta9934/Loan_Prediction_Model",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Hotel-Room Booking System",
      href: "https://github.com/Gupta9934/Hotel-Room-Booking-System",
      dates: "October 2023 - January 2024",
      active: true,
      description:
        "Develop a hotel room booking system that allows users to easily search, select, and reserve rooms. Incorporating real-time availability, booking management, and payment integration, the system enhances user experience while streamlining hotel operations for efficient room allocation.",
      technologies: [
        "JavaScript",
        "Java SpringBoot",
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Gupta9934/Hotel-Room-Booking-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },

    {
      title: "E Commerce Product Recommenation",
      href: "https://github.com/Gupta9934/E-Commerce-Product-Recommendation",
      dates: "Feb 2023 - May 2023",
      active: true,
      description:
        "Build an e-commerce product recommendation system using machine learning algorithms to personalize shopping experiences. By analyzing user behavior, preferences, and purchase history, the system suggests relevant products, improving user satisfaction and boosting sales. This AI-driven approach enhances product discovery, engagement, and customer loyalty, driving business growth.",
      technologies: [
        "Machine Learning",
        "Jupyter Notebook", "Typescript",
        "PostgreSQL",
        "Python",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Gupta9934/E-Commerce-Product-Recommendation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: undefined,
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  certifications: [
    // Google Certifications
    {
      title: "Leadership and Management Skills",
      issuedBy: "IIM Ahmedabad",
      href: "https://coursera.org/verify/FG9CQRFUBM3F",
    },
    {
      title: "Google Advanced Data Analytics",
      issuedBy: "IIM Ahmedabad",
      href: "https://coursera.org/verify/professional-cert/5SY9DQZRDLUV",
    },
    {
      title: "Google Cybersecurity Professional",
      issuedBy: "Google",
      href: "https://coursera.org/verify/professional-cert/ED8GXFTS4EWR",
    },
    {
      title: "Google Project Management Professional",
      issuedBy: "Google",
      href: "https://coursera.org/verify/professional-cert/VTTDF52JYQCH",
    },
    {
      title: "Cybersecurity Roles, Processes & Operating System Security",
      issuedBy: "Google",
      href: "https://coursera.org/verify/33K38XRCU6L4",
    },

    // IBM Certifications
    {
      title: "IBM Back-End Development Professional",
      issuedBy: "IBM",
      href: "https://coursera.org/verify/professional-cert/8UGXJGAZQGJC",
    },
    {
      title: "IBM Data Analyst Professional",
      issuedBy: "IBM",
      href: "https://coursera.org/verify/professional-cert/C2XGJGHVSSWX",
    },
    {
      title: "IBM IT Project Manager Professional",
      issuedBy: "IBM",
      href: "https://coursera.org/verify/professional-cert/FVM767VJXD3U",
    },

    // Microsoft Certification
    {
      title: "Cybersecurity Threat Vectors and Mitigation",
      issuedBy: "Microsoft",
      href: "https://coursera.org/verify/MC9DFQAADTEA",
    },

    // University of Colorado Certifications
    {
      title: "Advanced System Security Design",
      issuedBy: "University of Colorado",
      href: "https://coursera.org/verify/R2U7RTJY6H26",
    },
    {
      title: "Cloud Computing Security",
      issuedBy: "University of Colorado",
      href: "https://coursera.org/verify/SH3QJXBGQC99",
    },
    {
      title: "DDoS Attacks and Defense Mechanisms",
      issuedBy: "University of Colorado",
      href: "https://coursera.org/verify/6YGUHXAPXBAG",
    },

    // Other Professional Certifications
    {
      title: "Advanced Encryption and Decryption using C++",
      issuedBy: "Coursera Project Network",
      href: "https://coursera.org/verify/XEMKMR9FAQQC",
    },
    //     title: "Hack The North",
    //     dates: "September 14th - 16th, 2018",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //     links: [],
    //   },
    //   {
    //     title: "FirstNet Public Safety Hackathon",
    //     dates: "March 23rd - 24th, 2018",
    //     location: "San Francisco, California",
    //     description:
    //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
    //     icon: "public",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
    //     links: [],
    //   },
    //   {
    //     title: "DeveloperWeek Hackathon",
    //     dates: "February 3rd - 4th, 2018",
    //     location: "San Francisco, California",
    //     description:
    //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //     links: [
    //       {
    //         title: "Github",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/cryptotrends/cryptotrends",
    //       },
    //     ],
    //   },
    //   {
    //     title: "HackDavis",
    //     dates: "January 20th - 21st, 2018",
    //     location: "Davis, California",
    //     description:
    //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //     win: "Best Data Hack",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //     links: [
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/my6footprint",
    //       },
    //       {
    //         title: "ML",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //       },
    //       {
    //         title: "iOS",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/CarbonWallet",
    //       },
    //       {
    //         title: "Server",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/Wallet6/wallet6-server",
    //       },
    //     ],
    //   },
    //   {
    //     title: "ETH Waterloo",
    //     dates: "October 13th - 15th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //     links: [
    //       {
    //         title: "Organization",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/ethdocnet",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Hack The North",
    //     dates: "September 15th - 17th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a virtual reality application allowing users to see themselves in third person.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Streamer Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/justinmichaud/htn2017",
    //       },
    //       {
    //         title: "Client Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/RTSPClient",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Hack The 6ix",
    //     dates: "August 26th - 27th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/ShareShip/ShareShip",
    //       },
    //       {
    //         title: "Site",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://share-ship.herokuapp.com/",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Stupid Hack Toronto",
    //     dates: "July 23rd, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Global AI Hackathon - Toronto",
    //     dates: "June 23rd - 25th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //     win: "1st Place Winner",
    //     links: [
    //       {
    //         title: "Article",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/TinySamosas/",
    //       },
    //     ],
    //   },
    //   {
    //     title: "McGill AI for Social Innovation Hackathon",
    //     dates: "June 17th - 18th, 2017",
    //     location: "Montreal, Quebec",
    //     description:
    //       "Developed realtime facial microexpression analyzer using AI",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //     links: [],
    //   },
    //   {
    //     title: "Open Source Circular Economy Days Hackathon",
    //     dates: "June 10th, 2017",
    //     location: "Toronto, Ontario",
    //     description:
    //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //     win: "1st Place Winner",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/genecis",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Make School's Student App Competition 2017",
    //     dates: "May 19th - 21st, 2017",
    //     location: "International",
    //     description: "Improved PocketDoc and submitted to online competition",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //     win: "Top 10 Finalist | Honourable Mention",
    //     links: [
    //       {
    //         title: "Medium Article",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //       },
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/pocketdoc-react-native",
    //       },
    //       {
    //         title: "YouTube",
    //         icon: <Icons.youtube className="h-4 w-4" />,
    //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/pocketdoc-react-native",
    //       },
    //     ],
    //   },
    //   {
    //     title: "HackMining",
    //     dates: "May 12th - 14th, 2017",
    //     location: "Toronto, Ontario",
    //     description: "Developed neural network to optimize a mining process",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //     links: [],
    //   },
    //   {
    //     title: "Waterloo Equithon",
    //     dates: "May 5th - 7th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //     links: [
    //       {
    //         title: "Devpost",
    //         icon: <Icons.globe className="h-4 w-4" />,
    //         href: "https://devpost.com/software/pocketdoc-react-native",
    //       },
    //       {
    //         title: "YouTube",
    //         icon: <Icons.youtube className="h-4 w-4" />,
    //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //       },
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/pocketdoc-react-native",
    //       },
    //     ],
    //   },
    //   {
    //     title: "SpaceApps Waterloo",
    //     dates: "April 28th - 30th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/earthwatch",
    //       },
    //     ],
    //   },
    //   {
    //     title: "MHacks 9",
    //     dates: "March 24th - 26th, 2017",
    //     location: "Ann Arbor, Michigan",
    //     description:
    //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/threejs-planes",
    //       },
    //     ],
    //   },
    //   {
    //     title: "StartHacks I",
    //     dates: "March 4th - 5th, 2017",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //     win: "1st Place Winner",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source (Mobile)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/recipic-ionic",
    //       },
    //       {
    //         title: "Source (Server)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/recipic-rails",
    //       },
    //     ],
    //   },
    //   {
    //     title: "QHacks II",
    //     dates: "February 3rd - 5th, 2017",
    //     location: "Kingston, Ontario",
    //     description:
    //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //     links: [
    //       {
    //         title: "Source (Mobile)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/dillionverma/human-huntr-react-native",
    //       },
    //       {
    //         title: "Source (API)",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Terrible Hacks V",
    //     dates: "November 26th, 2016",
    //     location: "Waterloo, Ontario",
    //     description:
    //       "Developed a mock of Windows 11 with interesting notifications and functionality",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Portal Hackathon",
    //     dates: "October 29, 2016",
    //     location: "Kingston, Ontario",
    //     description:
    //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //     image:
    //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //     links: [
    //       {
    //         title: "Source",
    //         icon: <Icons.github className="h-4 w-4" />,
    //         href: "https://github.com/UWPortalSDK/crowmark",
    //       },
    //     ],
    //   },
    //
  ],
} as const;
