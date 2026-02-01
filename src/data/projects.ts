import { type ProjectData } from "../components/Project";
import multiTenantSaasWordpressDiagram from "../assets/projects/multi-tenant-saas-wordpress/multi-tenant-saas-wordpress.svg";
import portfolioDiagram from "../assets/projects/portfolio/portfolio-architecture.svg";

export const multiTenantSaasWordpressProject: ProjectData = {
  id: "multi-tenant-saas-wordpress",
  title: "Multi-tenant SaaS platform for Wordpress",
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

// Add more projects here
export const allProjects: ProjectData[] = [
  multiTenantSaasWordpressProject,
  portfolioWebsiteProject,
];
