import { type ProjectData } from "../components/Project";
import multiTenantSaasWordpressDiagram from "../assets/projects/multi-tenant-saas-wordpress/multi-tenant-saas-wordpress.svg";
import portfolioDiagram from "../assets/projects/portfolio/portfolio-architecture.svg";
import multiTenantPhpApp from "../assets/projects/multi-tenant-php-app/multi-tenant-php-app-architecture.svg";
import ecommerceMarketplaceApp from "../assets/projects/ecommerce-marketplace-app/ecommerce-marketplace-app-architecture.svg";
import eventDrivenCalculationPipelineApp from "../assets/projects/event-driven-calculation-pipeline-app/event-driven-calculation-pipeline-architecture.svg";
import aiOrderingChatbotApp from "../assets/projects/ai-ordering-chatbot-app/ai-ordering-chatbot-architecture.svg";

export const multiTenantSaasWordpressProject: ProjectData = {
  id: "multi-tenant-saas-wordpress",
  title: "Multi-tenant SaaS platform for Wordpress - Migration to AWS",
  projectType: "professional",
  codeAvailability:
    "This project was built for my employer. The source code is proprietary and cannot be shared publicly.",
  description: [
    [
      { text: "A " },
      {
        text: "multi-tenant SaaS platform for WordPress",
        className: "text-gray-300 font-semibold",
      },
      { text: " hosted on " },
      { text: "AWS", className: "text-amber-400 font-semibold" },
      { text: " using " },
      {
        text: "Amazon EKS (Elastic Kubernetes Service)",
        className: "text-amber-400 font-semibold",
      },
      { text: "." },
    ],
    [
      { text: "Built with " },
      {
        text: "Infrastructure as Code (Terraform)",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " for multi-environment support, deploying networking infrastructure, AWS services, and Kubernetes cluster management via ",
      },
      { text: "custom Helm charts", className: "text-teal-400 font-semibold" },
      { text: " with per-tenant configurations." },
    ],
  ],
  image: multiTenantSaasWordpressDiagram,
  imageAlt: "Multi-Tenant Saas Wordpress Architecture Diagram",
  technologies: [
    "AWS EKS",
    "AWS VPC",
    "AWS RDS",
    "AWS EFS",
    "AWS WAF",
    "CloudFront",
    "CloudWatch",
    "Terraform",
    "Kubernetes",
    "Helm",
    "Envoy Gateway",
  ],
  whatIBuilt: [
    [
      {
        text: "Multi-environment infrastructure",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " using Terraform for deploying VPC, Availability Zones, Subnets, and networking components",
      },
    ],
    [
      {
        text: "EKS cluster with managed addons",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " integrated with EFS for persistent storage and RDS for database management",
      },
    ],
    [
      { text: "Custom Helm charts", className: "text-teal-400 font-semibold" },
      {
        text: " for deploying application and storage resources with per-tenant configurations",
      },
    ],
    [
      {
        text: "CloudFront + WAF integration",
        className: "text-teal-400 font-semibold",
      },
      { text: " for content delivery and security protection at the edge" },
    ],
    [
      {
        text: "Kubernetes cluster management",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with Cluster Secrets and Envoy Gateway API for traffic management",
      },
    ],
    [
      {
        text: "Tenant isolation architecture",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " ensuring secure and scalable multi-tenancy for WordPress instances",
      },
    ],
  ],
  keyFeatures: [
    "Multi-tenant architecture",
    "Per-tenant configurations",
    "Multi-environment support",
    "Infrastructure as Code (Terraform)",
    "Kubernetes orchestration",
    "Automated scaling with EKS",
  ],
};

export const portfolioWebsiteProject: ProjectData = {
  id: "portfolio-website",
  title: "Personal Portfolio Website",
  projectType: "personal",
  codeAvailability: "",
  description: [
    [
      { text: "A " },
      {
        text: "modern, responsive portfolio website",
        className: "text-gray-300 font-semibold",
      },
      { text: " built with " },
      { text: "React", className: "text-blue-400 font-semibold" },
      { text: " and " },
      { text: "TypeScript", className: "text-blue-400 font-semibold" },
      { text: ", styled with " },
      { text: "Tailwind", className: "text-cyan-400 font-semibold" },
      { text: "." },
    ],
    [
      { text: "Deployed on " },
      { text: "AWS", className: "text-amber-400 font-semibold" },
      { text: " using " },
      {
        text: "S3 for static hosting",
        className: "text-amber-400 font-semibold",
      },
      { text: ", " },
      { text: "CloudFront CDN", className: "text-amber-400 font-semibold" },
      { text: " for global content delivery, " },
      { text: "Route53", className: "text-amber-400 font-semibold" },
      { text: " for DNS management, and " },
      { text: "ACM", className: "text-amber-400 font-semibold" },
      { text: " for SSL/TLS certificates." },
    ],
    [
      { text: "Features " },
      {
        text: "automated CI/CD pipeline",
        className: "text-green-400 font-semibold",
      },
      { text: " with " },
      {
        text: "GitHub Actions",
        className: "text-green-400 font-semibold",
      },
      { text: " for deployment and rollback workflows, using " },
      {
        text: "OIDC authentication",
        className: "text-green-400 font-semibold",
      },
      { text: " for secure AWS access without long-lived credentials." },
    ],
  ],
  image: portfolioDiagram,
  imageAlt: "Portfolio Website Architecture Diagram",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind",
    "React Router",
    "GitHub Actions",
    "AWS S3",
    "CloudFront",
    "Route53",
    "ACM",
  ],
  whatIBuilt: [
    [
      {
        text: "Component-based architecture",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with reusable components including Project cards, Badges, Hero section, and responsive Layout",
      },
    ],
    [
      {
        text: "Client-side routing",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with React Router for seamless navigation between Home, Projects, and Project Detail pages",
      },
    ],
    [
      {
        text: "Responsive design system",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using Tailwind with custom styling and mobile-first approach",
      },
    ],
    [
      {
        text: "AWS infrastructure setup",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " for static website hosting with S3, global CDN via CloudFront, custom domain with Route53, and HTTPS with ACM",
      },
    ],
    [
      {
        text: "CI/CD pipeline with GitHub Actions",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " featuring automated deployment workflow, rollback capability to any commit, OIDC-based AWS authentication, and automatic CloudFront cache invalidation",
      },
    ],
    [
      {
        text: "Project showcase system",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with dynamic project data structure, detailed project pages, and technology badges",
      },
    ],
    [
      {
        text: "Build optimization",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using Vite for fast development and optimized production builds",
      },
    ],
  ],
  keyFeatures: [
    "React with TypeScript",
    "Responsive design across all devices",
    "Fast page navigation with React Router",
    "Automated CI/CD with GitHub Actions",
    "Global CDN distribution via CloudFront",
    "OIDC-based AWS authentication (no long-lived credentials)",
  ],
  links: [
    {
      url: "https://github.com/KristijanJ/portfolio",
      text: "GitHub Frontend",
    },
    {
      url: "https://github.com/KristijanJ/portfolio-infra",
      text: "GitHub Infrastructure",
    },
    {
      url: "/",
      text: "Demo",
    },
  ],
};

export const multiTenantPhpAppProject: ProjectData = {
  id: "multi-tenant-php-app",
  title: "Multi-Tenant PHP app - Migration to AWS",
  projectType: "professional",
  codeAvailability:
    "This project was built for my employer. The source code is proprietary and cannot be shared publicly.",
  description: [
    [
      { text: "A " },
      {
        text: "complete infrastructure migration",
        className: "text-gray-300 font-semibold",
      },
      { text: " of " },
      {
        text: "multi-tenant PHP application platforms",
        className: "text-gray-300 font-semibold",
      },
      { text: " from legacy hosting to " },
      { text: "AWS", className: "text-amber-400 font-semibold" },
      { text: " using " },
      {
        text: "Infrastructure as Code",
        className: "text-teal-400 font-semibold",
      },
      { text: "." },
    ],
    [
      { text: "Built with " },
      { text: "Terraform", className: "text-teal-400 font-semibold" },
      { text: " featuring " },
      {
        text: "per-tenant Auto Scaling Groups",
        className: "text-teal-400 font-semibold",
      },
      { text: " with " },
      { text: "EC2 instances", className: "text-amber-400 font-semibold" },
      { text: " running " },
      {
        text: "PHP and Nginx",
        className: "text-gray-300 font-semibold",
      },
      { text: ", while sharing core infrastructure including " },
      {
        text: "Aurora Serverless v2",
        className: "text-amber-400 font-semibold",
      },
      { text: ", " },
      {
        text: "Application Load Balancer",
        className: "text-amber-400 font-semibold",
      },
      { text: ", and " },
      { text: "EFS storage", className: "text-amber-400 font-semibold" },
      { text: "." },
    ],
    [
      { text: "Includes " },
      {
        text: "comprehensive automation",
        className: "text-green-400 font-semibold",
      },
      { text: " with custom " },
      { text: "Makefile", className: "text-green-400 font-semibold" },
      { text: " for Terraform and AWS operations, " },
      {
        text: "Bitbucket Pipelines CI/CD",
        className: "text-green-400 font-semibold",
      },
      { text: " for application deployments, and " },
      {
        text: "CloudWatch monitoring",
        className: "text-green-400 font-semibold",
      },
      { text: " with per-tenant dashboards and SNS alerting." },
    ],
  ],
  image: multiTenantPhpApp,
  imageAlt: "Multi-Tenant PHP app Infrastructure Architecture Diagram",
  technologies: [
    "Terraform",
    "AWS VPC",
    "AWS ALB",
    "AWS EC2",
    "Auto Scaling",
    "Aurora Serverless v2",
    "AWS EFS",
    "CloudWatch",
    "SNS",
    "Secrets Manager",
    "IAM",
    "SSM",
    "PHP",
    "Nginx",
    "Bitbucket Pipelines",
  ],
  whatIBuilt: [
    [
      {
        text: "Multi-tenant architecture design",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with per-tenant Auto Scaling Groups for isolation while sharing core infrastructure (Aurora, ALB, EFS) for cost efficiency",
      },
    ],
    [
      {
        text: "Complete VPC infrastructure",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with public, private, and database subnets across 3 Availability Zones, NAT Gateway, and comprehensive security group configuration",
      },
    ],
    [
      {
        text: "Aurora Serverless v2 setup",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with auto-scaling MySQL-compatible database, automated credential rotation via Secrets Manager, and per-tenant database isolation",
      },
    ],
    [
      {
        text: "Custom AMI creation",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with PHP, Nginx web server, and Node.js 20 LTS for application runtime",
      },
    ],
    [
      {
        text: "ALB with host-based routing",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " shared across all tenants for efficient traffic distribution and SSL/TLS termination with ACM certificates",
      },
    ],
    [
      {
        text: "Comprehensive CloudWatch monitoring",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with per-tenant metrics (healthy hosts, response times, error rates), unified dashboards, and SNS alarm notifications",
      },
    ],
    [
      {
        text: "Automation tooling",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with custom Makefile for streamlined Terraform operations, AWS MFA authentication, and environment management",
      },
    ],
    [
      {
        text: "CI/CD pipeline integration",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " with Bitbucket Pipelines for automated application deployments to per-tenant EC2 instances",
      },
    ],
    [
      {
        text: "Bastion server deployment",
        className: "text-teal-400 font-semibold",
      },
      {
        text: " in public subnet for build management, instance refresh scripts, and secure SSH access via SSM Session Manager",
      },
    ],
  ],
  keyFeatures: [
    "Multi-tenant resource isolation",
    "Shared infrastructure for cost efficiency",
    "Auto-scaling per tenant",
    "Aurora Serverless v2 auto-scaling database",
    "Comprehensive monitoring & alerting",
    "Infrastructure as Code with Terraform",
    "Multi-environment support (dev, prod)",
    "Automated deployments with Bitbucket Pipelines",
    "Custom AMI with complete runtime stack",
  ],
};

export const ecommerceMarketplaceAppProject: ProjectData = {
  id: "ecommerce-marketplace-app",
  title: "E-commerce Marketplace Mobile App",
  projectType: "professional",
  codeAvailability:
    "This project was built for my employer. The source code is proprietary and cannot be shared publicly.",
  description: [
    [
      { text: "A " },
      {
        text: "cross-platform mobile application",
        className: "text-gray-300 font-semibold",
      },
      { text: " for an " },
      {
        text: "e-commerce marketplace",
        className: "text-gray-300 font-semibold",
      },
      { text: ", built with " },
      { text: "React Native", className: "text-blue-400 font-semibold" },
      { text: " and " },
      { text: "Expo", className: "text-blue-400 font-semibold" },
      {
        text: ", enabling users to search products, scan barcodes, receive personalized recommendations, and manage their collections.",
      },
    ],
    [
      { text: "Features " },
      {
        text: "barcode scanning with device camera",
        className: "text-teal-400 font-semibold",
      },
      { text: " for product identification, " },
      {
        text: "push notifications",
        className: "text-teal-400 font-semibold",
      },
      { text: " for user engagement, " },
      {
        text: "Firebase integration",
        className: "text-amber-400 font-semibold",
      },
      { text: " for analytics and crash reporting, and " },
      {
        text: "internationalization support",
        className: "text-teal-400 font-semibold",
      },
      { text: " with i18n." },
    ],
    [
      { text: "Deployed to both " },
      {
        text: "iOS (TestFlight/App Store)",
        className: "text-green-400 font-semibold",
      },
      { text: " and " },
      {
        text: "Android (Google Play)",
        className: "text-green-400 font-semibold",
      },
      { text: " using " },
      {
        text: "EAS Build",
        className: "text-green-400 font-semibold",
      },
      {
        text: " with multiple build profiles for development, preview, and production environments.",
      },
    ],
  ],
  image: ecommerceMarketplaceApp,
  imageAlt: "E-commerce Marketplace Mobile App Architecture",
  technologies: [
    "React Native",
    "Expo",
    "TypeScript",
    "Expo Router",
    "React Navigation",
    "Firebase Analytics",
    "Firebase Crashlytics",
    "Expo Camera",
    "Expo Notifications",
    "Jest",
    "React Native Testing Library",
    "EAS Build",
    "i18n",
  ],
  whatIBuilt: [
    [
      {
        text: "Cross-platform mobile app",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with single codebase for iOS and Android, using React Native and Expo for efficient development and maintenance",
      },
    ],
    [
      {
        text: "Barcode scanning functionality",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using Expo Camera for quick product identification and lookup",
      },
    ],
    [
      {
        text: "Push notification system",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with Expo Notifications for engaging users with personalized recommendations, alerts, and relevant content",
      },
    ],
    [
      {
        text: "Firebase integration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " for real-time analytics tracking, crash reporting with Crashlytics, and monitoring user behavior and app stability",
      },
    ],
    [
      {
        text: "File-based routing with Expo Router",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " for intuitive navigation structure with drawer navigation, deep linking support, and type-safe routing",
      },
    ],
    [
      {
        text: "Comprehensive testing setup",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using Jest and React Native Testing Library with 80% coverage requirement across statements, branches, functions, and lines",
      },
    ],
    [
      {
        text: "Production deployment pipeline",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with EAS Build for automated builds, TestFlight distribution for iOS beta testing, and Google Play deployment for Android",
      },
    ],
    [
      {
        text: "Developer experience tooling",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with custom Makefile for common tasks, comprehensive documentation, automated testing workflows, and development/preview/production build profiles",
      },
    ],
    [
      {
        text: "Internationalization support",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using i18n-js for multi-language support with locale detection and translation management",
      },
    ],
  ],
  keyFeatures: [
    "Cross-platform iOS & Android support",
    "Barcode scanning for product identification",
    "Push notifications for user engagement",
    "Firebase Analytics & Crashlytics",
    "80% test coverage requirement",
    "EAS Build deployment pipeline",
    "Internationalization support",
    "Type-safe navigation with Expo Router",
    "Comprehensive documentation",
  ],
};

export const eventDrivenCalculationPipelineProject: ProjectData = {
  id: "event-driven-calculation-pipeline",
  title: "Event-Driven Financial Calculation Pipeline",
  projectType: "professional",
  codeAvailability:
    "This project was built for my employer. The source code is proprietary and cannot be shared publicly.",
  description: [
    [
      { text: "A " },
      {
        text: "complex event-driven serverless application",
        className: "text-gray-300 font-semibold",
      },
      { text: " built with " },
      { text: "Python", className: "text-blue-400 font-semibold" },
      { text: " and " },
      { text: "AWS CDK", className: "text-amber-400 font-semibold" },
      { text: " for automated " },
      {
        text: "financial calculations",
        className: "text-gray-300 font-semibold",
      },
      {
        text: " based on data from multiple 3rd party APIs, running on scheduled intervals (once or twice daily).",
      },
    ],
    [
      { text: "Features " },
      {
        text: "sophisticated retry logic",
        className: "text-teal-400 font-semibold",
      },
      { text: " with " },
      { text: "SQS", className: "text-amber-400 font-semibold" },
      { text: " and " },
      { text: "Step Functions", className: "text-amber-400 font-semibold" },
      { text: " to handle " },
      {
        text: "incomplete or delayed data from external APIs",
        className: "text-teal-400 font-semibold",
      },
      { text: ", including " },
      {
        text: "12-hour wait periods",
        className: "text-teal-400 font-semibold",
      },
      { text: " for data availability checks and " },
      {
        text: "rate limit management",
        className: "text-teal-400 font-semibold",
      },
      { text: " for API calls." },
    ],
    [
      { text: "Orchestrates multiple " },
      { text: "Lambda functions", className: "text-amber-400 font-semibold" },
      { text: " via " },
      { text: "EventBridge", className: "text-amber-400 font-semibold" },
      {
        text: " cron jobs, coordinating data validation, unprocessed data tracking in ",
      },
      { text: "DynamoDB", className: "text-amber-400 font-semibold" },
      { text: ", and calculation workflows with " },
      {
        text: "comprehensive monitoring",
        className: "text-green-400 font-semibold",
      },
      { text: " via " },
      {
        text: "CloudWatch alarms and metrics",
        className: "text-green-400 font-semibold",
      },
      { text: "." },
    ],
  ],
  image: eventDrivenCalculationPipelineApp,
  imageAlt: "Event-Driven Financial Calculation Pipeline Architecture",
  technologies: [
    "Python",
    "AWS CDK",
    "AWS Lambda",
    "EventBridge",
    "SQS",
    "Step Functions",
    "DynamoDB",
    "S3",
    "CloudWatch",
    "CloudWatch Alarms",
  ],
  whatIBuilt: [
    [
      {
        text: "Event-driven serverless architecture",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with EventBridge cron jobs triggering Lambda functions on scheduled intervals, coordinated via SQS queues for decoupling and reliability",
      },
    ],
    [
      {
        text: "Infrastructure as Code with AWS CDK",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using Python to define the entire infrastructure including Lambda functions, Step Functions, DynamoDB tables, SQS queues, and EventBridge rules",
      },
    ],
    [
      {
        text: "Sophisticated retry mechanism",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " handling incomplete or delayed data from 3rd party APIs with separate retry flows, Step Functions for long-running waits (12+ hours), and automatic failure recovery",
      },
    ],
    [
      {
        text: "Data validation and tracking",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " checking if all required data is available, storing unprocessed items in DynamoDB, and automatically retrying calculations when data becomes available",
      },
    ],
    [
      {
        text: "Step Functions workflows",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " for complex orchestration including API data fetching with timeout controls to avoid rate limits, wait states for delayed retries, and error handling with exponential backoff",
      },
    ],
    [
      {
        text: "3rd party API integration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with robust error handling for unreliable external APIs, including retry logic on failures, rate limiting, and data consistency checks",
      },
    ],
    [
      {
        text: "DynamoDB data management",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with multiple tables for storing raw data, calculation results, and tracking unprocessed items with read/write/delete operations across the pipeline",
      },
    ],
    [
      {
        text: "Comprehensive monitoring",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with CloudWatch Logs for all Lambda functions, custom metrics for tracking processing status, and CloudWatch Alarms for failures, delays, and retry exhaustion",
      },
    ],
    [
      {
        text: "Multi-flow orchestration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " coordinating separate data ingestion flow, validation flow, calculation flow, and retry flow with proper message passing and state management",
      },
    ],
  ],
  keyFeatures: [
    "Event-driven serverless architecture",
    "Infrastructure as Code with Python CDK",
    "Sophisticated retry and error handling",
    "12-hour wait periods for data availability",
    "Rate limit management for API calls",
    "DynamoDB for data persistence",
    "Step Functions for complex workflows",
    "CloudWatch monitoring and alarms",
    "SQS for reliable message queuing",
  ],
};

export const aiOrderingChatbotProject: ProjectData = {
  id: "ai-ordering-chatbot",
  title: "AI-Powered B2B Ordering Chatbot",
  projectType: "professional",
  codeAvailability:
    "This project was built for my employer. The source code is proprietary and cannot be shared publicly.",
  description: [
    [
      { text: "An " },
      {
        text: "AI-powered conversational chatbot",
        className: "text-gray-300 font-semibold",
      },
      { text: " built with " },
      { text: "AWS Bedrock", className: "text-purple-400 font-semibold" },
      { text: " and " },
      { text: "Bedrock Agents", className: "text-purple-400 font-semibold" },
      { text: " to streamline " },
      {
        text: "B2B ordering workflows",
        className: "text-gray-300 font-semibold",
      },
      {
        text: ", enabling users to place orders through natural language conversations instead of navigating traditional web forms.",
      },
    ],
    [
      { text: "Features " },
      {
        text: "real-time bidirectional communication",
        className: "text-teal-400 font-semibold",
      },
      { text: " via " },
      {
        text: "AWS WebSocket API",
        className: "text-amber-400 font-semibold",
      },
      { text: " integrated with an " },
      { text: "Angular", className: "text-red-400 font-semibold" },
      { text: " frontend chat bubble, " },
      {
        text: "context-aware product recommendations",
        className: "text-teal-400 font-semibold",
      },
      { text: " based on previous order history from " },
      { text: "DynamoDB", className: "text-amber-400 font-semibold" },
      { text: ", and " },
      {
        text: "intelligent missing information handling",
        className: "text-teal-400 font-semibold",
      },
      { text: " (e.g., asking for delivery dates)." },
    ],
    [
      { text: "Handles " },
      {
        text: "natural language order requests",
        className: "text-purple-400 font-semibold",
      },
      { text: ' like "I need 20 bananas and 20 tomatoes", automatically ' },
      {
        text: "searches the product database",
        className: "text-teal-400 font-semibold",
      },
      { text: ", " },
      {
        text: "suggests similar items",
        className: "text-teal-400 font-semibold",
      },
      { text: " from order history, " },
      {
        text: "validates the order",
        className: "text-teal-400 font-semibold",
      },
      { text: ", and creates it in " },
      { text: "DynamoDB", className: "text-amber-400 font-semibold" },
      { text: " after user confirmation." },
    ],
  ],
  image: aiOrderingChatbotApp,
  imageAlt: "AI-Powered B2B Ordering Chatbot Architecture",
  technologies: [
    "AWS Bedrock",
    "Bedrock Agents",
    "AWS Lambda",
    "WebSocket API",
    "DynamoDB",
    "Angular",
    "TypeScript",
    "AWS CDK",
    "CloudWatch",
  ],
  whatIBuilt: [
    [
      {
        text: "AWS Bedrock Agent configuration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with custom prompts and tools for understanding natural language order requests, product lookups, and order creation workflows",
      },
    ],
    [
      {
        text: "Real-time WebSocket API",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using AWS API Gateway for bidirectional communication between the Angular frontend and backend, enabling live chatbot interactions",
      },
    ],
    [
      {
        text: "Angular chat bubble component",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " integrated into existing web application, providing a seamless conversational interface for placing orders",
      },
    ],
    [
      {
        text: "Lambda function orchestration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " with routing logic to handle multiple operations: listing products, retrieving previous orders, searching for similar items, and creating new orders in DynamoDB",
      },
    ],
    [
      {
        text: "Context-aware recommendation engine",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " analyzing previous order history in DynamoDB to suggest relevant products based on user patterns and similar past orders",
      },
    ],
    [
      {
        text: "Natural language processing flow",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " handling multi-turn conversations, extracting product quantities and types, asking for missing information, and maintaining conversation context",
      },
    ],
    [
      {
        text: "Order validation and confirmation",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " workflow ensuring all required information is collected, presenting order summary to users, and creating orders only after explicit confirmation",
      },
    ],
    [
      {
        text: "Infrastructure as Code with CDK",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " using TypeScript to define all AWS resources including Lambda functions, WebSocket API, Bedrock agent configuration, and IAM permissions",
      },
    ],
    [
      {
        text: "DynamoDB integration",
        className: "text-cyan-400 font-semibold",
      },
      {
        text: " working with existing database schema to read product catalog, fetch order history, and create new orders without disrupting the legacy system",
      },
    ],
  ],
  keyFeatures: [
    "Natural language order processing",
    "AWS Bedrock AI agent",
    "Real-time WebSocket communication",
    "Context-aware product recommendations",
    "Multi-turn conversation handling",
    "Order history analysis",
    "Angular frontend integration",
    "Infrastructure as Code with CDK",
    "DynamoDB integration",
  ],
};

// Add more projects here
export const allProjects: ProjectData[] = [
  multiTenantSaasWordpressProject,
  multiTenantPhpAppProject,
  eventDrivenCalculationPipelineProject,
  aiOrderingChatbotProject,
  ecommerceMarketplaceAppProject,
  portfolioWebsiteProject,
];
