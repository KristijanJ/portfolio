import { type ProjectData } from "../components/Project";
import multiTenantSaasWordpressDiagram from "../assets/projects/multi-tenant-saas-wordpress/multi-tenant-saas-wordpress.svg";

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
  // links: {
  //   github: "",
  //   demo: "",
  // },
};

// Add more projects here
export const allProjects: ProjectData[] = [multiTenantSaasWordpressProject];
