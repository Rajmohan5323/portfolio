import {
  FiCode,
  FiCloud,
  FiShield,
} from "react-icons/fi";

import { RiRocket2Line } from "react-icons/ri";

export const personalInfo = {
  name: "Raj Mohan",
  title: "Software Developer",
  location: "Tamilnadu , India",
  phone: "+91 9787005323",
  email: "rajmohan5323@gmail.com",
  linkedin: "https://www.linkedin.com/in/rajmohan5323/",
  github: "https://github.com/Rajmohan5323",
  //summary: "Full Stack Java Developer with 4+ years of experience building scalable microservices and REST APIs using Java and Spring Boot. Proficient in designing event-driven microservices with Apache Kafka, optimizing database performance with Hibernate and Redis, Deployed and maintained containerized applications on AWS with CI/CD pipelines.",
  summary:"with Java, Spring Boot, Microservices, REST APIs, Kafka, Redis, PostgreSQL, Docker, Kubernetes, and AWS. Passionate about designing clean architectures, distributed systems, and high-performance applications."

};

export const roles = [
  "Full Stack Java Developer",
  "Java Backend Engineer",
  "Spring Boot Developer",
  "API Builder",
];

export const highlights = [
  {
    icon: FiCode,
    title: "Clean Code",
    description: "Writing maintainable & scalable code",
  },
  {
    icon: RiRocket2Line,
    title: "Problem Solver",
    description: "Solving complex backend challenges",
  },
  {
    icon: FiCloud,
    title: "Cloud Ready",
    description: "AWS, Docker, k8s & CI/CD deployment",
  },
  {
    icon: FiShield,
    title: "Best Practices",
    description: "Security, Testing & Architecture",
  },
];
export const skillItems = [
  { name: "Java 8-21", icon: "/icons/java.svg", category: "lang", proficiency: 92 },
  { name: "Spring", icon: "/icons/spring.svg", category: "lang", proficiency: 90 },
  { name: "Spring Boot", icon: "/icons/spring-boot.svg", category: "lang", proficiency: 90 },
  { name: "Spring Security", icon: "/icons/spring-security.svg", category: "lang", proficiency: 80 },
  { name: "Spring Cloud", icon: "/icons/spring-cloud.svg", category: "lang", proficiency: 80 },
  { name: "Spring Data JPA", icon: "/icons/spring-data.svg", category: "lang", proficiency: 85 },
  { name: "Hibernate", icon: "/icons/hibernate.svg", category: "lang", proficiency: 86 },
  { name: "JUnit5", icon: "/icons/junit.svg", category: "lang", proficiency: 80 },
  { name: "Mockito", icon: "/icons/mockito_logo.svg", category: "lang", proficiency: 75 },
  // { name: "Java Script", icon: "/icons/javascript.svg", category: "lang", proficiency: 90 },

  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "db", proficiency: 90 },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "db", proficiency: 80 },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "db", proficiency: 70 },
  { name: "Redis", icon: "/icons/redis.svg", category: "db", proficiency: 75 },
  { name: "Liquibase", icon: "/icons/liquibase.svg", category: "db", proficiency: 90 },
  { name: "Flyway", icon: "/icons/flyway.svg", category: "db", proficiency: 90 },
  { name: "Apache Kafka", icon: "/icons/apache-kafka.svg", category: "db", proficiency: 80 },
  { name: "RabbitMQ", icon: "/icons/rabbitmq.svg", category: "db", proficiency: 80 },

  { name: "Docker", icon: "/icons/docker.svg", category: "tool", proficiency: 82 },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg", category: "tool", proficiency: 75 },
  { name: "Git", icon: "/icons/git.svg", category: "tool", proficiency: 90 },
  { name: "GitHub", icon: "/icons/github-mono.svg", category: "tool", proficiency: 90 },
  { name: "GitHub Actions", icon: "/icons/github-actions.svg", category: "tool", proficiency: 75 },
  { name: "CI/CD", icon: "/icons/cicd.svg", category: "tool", proficiency: 75 },
  { name: "AWS(EC2, S3, RDS, EKS)", icon: "/icons/aws.svg", category: "tool", proficiency: 75 }, 
  { name: "Jenkins", icon: "/icons/jenkins.svg", category: "tool", proficiency: 70 },
  { name: "Maven", icon: "/icons/maven-repo.svg", category: "tool", proficiency: 90 },

  { name: "Prometheus", icon: "/icons/prometheus.svg", category: "observ", proficiency: 90 },
  { name: "Grafana", icon: "/icons/grafana.svg", category: "observ", proficiency: 90 },
  { name: "Elastic Search", icon: "/icons/elastic-search.svg", category: "observ", proficiency: 80 },
  { name: "Logstash", icon: "/icons/logstash.svg", category: "observ", proficiency: 80 },
  { name: "Kibana", icon: "/icons/kibana.svg", category: "observ", proficiency: 80 },
  { name: "Micrometer", icon: "/icons/micrometer.svg", category: "observ", proficiency: 70 },
  { name: "DataDog", icon: "/icons/datadog.svg", category: "observ", proficiency: 80 },
  { name: "Zipkin", icon: "/icons/zipkin.svg", category: "observ", proficiency: 90 },
  { name: "OpenTelemetry", icon: "/icons/opentelemetry.svg", category: "observ", proficiency: 85 },
  { name: "Jaeger", icon: "/icons/jaegertracing.svg", category: "observ", proficiency: 75 },
   
  
  { name: "Microservices", icon: "/icons/microservice.svg", category: "arch", proficiency: 85 },
  { name: "Distributed Systems", icon: "/icons/distriputed-system.svg", category: "arch", proficiency: 80 },
  { name: "REST APIs", icon: "/icons/api.svg", category: "arch", proficiency: 90 },
  { name: "OpenAPI / Swagger", icon: "/icons/swagger.svg", category: "arch", proficiency: 90 },
  { name: "API Gateway", icon: "/icons/gateway.svg", category: "arch", proficiency: 85 },
  { name: "Service Discovery", icon: "/icons/service-discovery.svg", category: "arch", proficiency: 89 },
  { name: "Circuit Breaker", icon: "/icons/circuit.svg", category: "arch", proficiency: 90 },
  { name: "Event Driven Architecture", icon: "/icons/event-driven.svg", category: "arch", proficiency: 80 },
  // { name: "CQRS", icon: "/icons/CQRS.svg", category: "arch", proficiency: 85 },
  { name: "SOLID Principles", icon: "/icons/solid.svg", category: "arch", proficiency: 85 },
  { name: "Clean Code", icon: "/icons/clean-code.svg", category: "arch", proficiency: 85 },
  { name: "Design Patterns", icon: "/icons/design-partern.svg", category: "arch", proficiency: 80 },
  
];

export const experience = [
  {
    company: "Machint Solutions Ltd",
    subtitle: "www.machint.com",
    website : "https://www.machint.com/",
    role: "Associate",
    location: "Chennai",
    period: "June 2024 – Present",
    icon: "machint-logo.svg",
    certificate: "/certificates/machint-experience.pdf",
    highlights: [
      "Built scalable and high-performance backend applications using Java, Spring Boot, and Microservices architecture.",
      "Designed and developed RESTful APIs following MVC and layered architecture principles.",
      "Implemented event-driven microservices using Apache Kafka for asynchronous communication across distributed systems.",
      "Implemented Redis caching to improve API response times by 30% and decreasing database load by 20%.",
      "Optimized Hibernate queries and PostgreSQL indexing to resolve N+1 issues and improve application performance by 25%",
      "Containerized and deployed applications using Docker, Kubernetes, AWS, and CI/CD pipelines.",
      "Contributed to application enhancements, bug fixing, and feature implementation in production-like environments.",
    ],
    tech: ["Java", "Spring Boot", "Microservices" , "REST APIs",  "PostgreSQL","Kafka", "Redis", "Flyway" ,"Docker", "Kubernates","AWS","CI/CD"],
  },
  {
    company: "B2 IT Solutions Ltd",
    subtitle: "",
    role: "Java Software Developer",
    location: "Chennai",
    period: "April 2022 – July 2023",
    icon: "b2it2.svg",
    certificate: "/certificates/b2it-experience.pdf",
    highlights: [
      "Developed a Java-based database management tool for automated backup, restoration, and financial data processing.improving operational efficiancy by 30%",
      "Built Java Swing applications for customer, deposit, and loan management workflows.",
      "Automated CSV-based reporting and data export processes to improve operational efficiency and reducing manual effort by 40%",
    ],
    tech: ["Java", "J2EE", "Struts","Java Swing", "PostgreSQL", "JBoss","Apache POI"],
  },
  {
    company: "Onward e Services Ltd",
    subtitle: "www.onwardgroup.com",
    website : "https://www.onwardgroup.com/",
    role: "Technical Support Engineer",
    location: "Chennai",
    period: "Dec 2014 – July 2019",
    icon: "onward4.svg",
    certificate: "/certificates/onward-experience.pdf",
    highlights: [
      "Maintained and enhanced Java/J2EE-based banking applications, ensuring system stability and reliability.",
      "Designed and developed iReport-based reports for banking transactions, customer analytics, and compliance reporting.",
      "Developed PostgreSQL queries and provided application support, debugging, and production issue resolution.",
    ],
    tech: ["Java", "J2EE", "Struts", "PostgreSQL","JBoss","iReport","Apache POI","Suse Linux"],
  },
];

export const projects = [
  {
    title: "Call Tracker Application",
    language: "Java",
    date: "Jan 2026",
    github: "",
    // image: "/projects/market-data-arch.png",
    image: "",
    description: [
      "Designed and developed a centralized call tracking platform to manage employee call activities, customer interactions, and operational reporting.",
      "Integrated SMS Gateway APIs for real-time customer notifications and built RESTful services to streamline call monitoring and follow-up workflows.",
      "Fully containerized with Docker Compose, monitored via Prometheus and Grafana with custom metrics dashboards.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "RabbitMQ",
      "REST APIs",
      "PostgreSQL",
      "SMS Gateway API",
      "TypeScript",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Tool Management System",
    language: "Java",
    date: "June 2023",
    github: "https://github.com/Rajmohan5323/PacsPortal.git",
    description: [
      "Modernized a legacy monolithic application by migrating it to a Microservices architecture, improving scalability, maintainability, and deployment agility.",
      "Implemented admin controls for user moderation and Hibernate-backed user persistence on PostgreSQL.",
      "Integrated Razorpay and other third-party APIs for secure payment processing, transaction tracking, and seamless cross-system integration.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "Microservices",
      "Razorpay API",
      "PostgreSQL",
      "Docker",
    ],
  },
];

export const education = [
  {
    institution: "MR College of Arts and Science",
    location: "Thathanur",
    degree: "Bsc Computer Science",
    period: "Nov 2009 – May 2012",
    board: "",
    score: "8.12 / 10",
    scoreLabel: "Cumulative GPA",
  },
  {
    institution: "Government Boys Higher Secondary School",
    location: "Jeyankondam",
    degree: "HSC (Class XII)",
    period: "2007 – 2008",
    board: "State Board",
    score: "70.49%",
    scoreLabel: "Percentage",
  },
  {
    institution: "Government Higher Secondary School",
    location: "Neduncherry",
    degree: "SSC (Class X)",
    period: "2006-2007",
    board: "SSC",
    score: "68.40%",
    scoreLabel: "Percentage",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const portfolioData = {
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/rajmohan5323/",
    github: "https://github.com/Rajmohan5323",
    instagram: "https://www.instagram.com/rajmohan_5323/",
    facebook: "https://www.facebook.com/raj.mohan.323/",
    whatsapp: "https://wa.me/919787005323",
  },

  contactInfo: {
    phone: "+91 9787005323",
  },
};