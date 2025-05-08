export const PROJECTS = [
  {
    projectName: "NotebookLM",
    projectDescription:
      "Developed a multi-capability Q&A document intelligence agent with Python/FastAPI, React, LangChain, Pinecone, Redis, and Google Gemini 2.0 Flash, enabling advanced cross-document queries, automated source citations, and a scalable agentic RAG design",
    projectTechnologies: ["Python", "FastAPI", "React", "LangChain", "Pinecone", "Redis", "Google Gemini"],
  },
  {
    projectName: "Multi-Agent Review Analysis for Restaurant Scoring",
    projectDescription:
      "Built a multi-agent workflow using AutoGen and GPT-4o-mini to extract restaurant ratings from unstructured text reviews, processing over 10,000 reviews with a 96.67% accuracy rate in identifying food and service quality scores",
    projectTechnologies: ["AutoGen", "GPT-4o-mini", "Python"],
  },
  {
    projectName: "Tuning Large Language Model for GSM8K Dataset",
    projectDescription:
      "Achieved 94.24% test accuracy fine-tuning Llama-2-7b-hf on GSM8K utilizing QLoRA and PEFT with A100 GPUs, cutting training time from 10+ hours to under 30 minutes; used WandB for monitoring",
    projectTechnologies: [
      "HPC",
      "Llama",
      "WandB",
      "Huggingface",
      "Python",
      "QLoRA",
      "PEFT",
    ],
  },
  {
    projectName: "Elastic Face Recognition Application",
    projectDescription:
      "Developed a scalable face recognition application using Python/FastAPI on AWS, leveraging EC2, S3, CloudWatch, and Elastic IP to optimize resources and handle 1000 concurrent requests with deep learning models",
    projectTechnologies: ["Python", "FastAPI", "AWS EC2", "AWS S3", "AWS CloudWatch", "Deep Learning"],
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
