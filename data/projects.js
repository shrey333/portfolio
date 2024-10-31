export const PROJECTS = [
  {
    projectName:
      "Tuning Large Language Model for Math Problem Solving (GSM8K Dataset)",
    projectDescription:
      "Fine-tuned the ‘meta-llama/Llama-2-7b-hf’ model on the GSM8K dataset, achieving 94.24% test accuracy, utilizing NVIDIA A100 GPUs with CUDA to reduce training time from over 10 hours to under 30 minutes;Tracked training progress using exact match metrics and reductions in train/validation loss, visualizing improvements through Weights & Biases (WandB)",
    projectTechnologies: [
      "HPC",
      "Llama",
      "WandB",
      "Huggingface",
      "Python",
      "Sbatch",
    ],
  },
  {
    projectName: "AWS Serverless File Processing System",
    projectDescription:
      "Designed a serverless application using AWS services and ReactJS for secure file uploads, with VM provisioning for data processing; Utilized AWS CDK in TypeScript for deployments, reducing deployment time by 50% and adhering to AWS best practices for scalability and security",
    projectTechnologies: ["AWS", "AWS CDK", "React", "TypeScript", "Python"],
  },
  {
    projectName: "Face Recognition as a Service",
    projectDescription:
      "Designed and architected an elastic web application scaling on demand up to a maximum of 20 AWS EC2 instances; Leveraged Django for the backend and AWS SQS and AWS S3 for deployment and storage; Implemented auto-scaling using Python and evaluated the application by generating 1000 requests",
    projectTechnologies: ["AWS", "NodeJS", "ExpressJS", "Django", "Python"],
  },
  {
    projectName: "NetArch - a Robust Client-Server System",
    projectDescription:
      "Crafted a sophisticated network architecture leveraging C language and Socket programming, integrating advanced features such as load balancing and file uploading in a multi-process client-server system; Led the development efforts to ensure seamless integration of mirroring functionalities within the network framework, enhancing its robustness and efficiency",
    projectTechnologies: ["C", "TCP/IP"],
  },
  {
    projectName: "Queuing WebApp(The Queue Platform)",
    projectDescription:
      "Created a real-time queue system with Socket.io for COVID-19 distancing optimization; " +
      "Implemented Geolocation API for congestion notifications and shop recommendations within a 15-mile radius; " +
      "Used RxJS for systematic user and shop state management, cutting API calls by 25%, enhancing UX by 27%",
    projectLink: "https://github.com/shrey333/thequeue",
    projectTechnologies: [
      "Angular",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "BootStrap",
      "RxJS",
      "GeoLocation API",
      "Socket.io",
    ],
  },
  {
    projectName: "UniCollab",
    projectDescription:
      "Leveraged Firebase authentication for role-based access control and implemented reliable push notifications; " +
      "Built quiz timeout system with Cloud Functions and NoSQL Firestore, enhancing exam management efficiency",
    projectLink: "https://github.com/shrey333/UniCollab",
    projectTechnologies: [
      "Flutter",
      "Firebase",
      "Cloud Firestore",
      "Cloud Messaging",
      "GetX",
      "Material UI",
    ],
  },
  {
    projectName: "Book Rental System",
    projectDescription:
      "Online Book Service allows users to either buy, rent or read or publish books online; It also allows users to search for books; It uses custom PdfJS renderer to render pdfs; It does have role based authentication and authorisation",
    projectLink: "https://github.com/shrey333/Online-Book-Service",
    projectTechnologies: ["Spring Boot", "JSP", "PDF.JS"],
  },
  {
    projectName: "Discussion Forum",
    projectDescription:
      "Worked on a .NET Core and ASP.NET web application for hosting threaded discussions on various topics, efficiently processing user-inputted information in the backend and utilizing a recursive algorithm to display hierarchical user comments",
    projectLink: "https://github.com/eeploolpee/DiscussionForum",
    projectTechnologies: ["ASP.NET", "BootStrap"],
  },
];
