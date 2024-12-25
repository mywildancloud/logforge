import { ChangelogEntry } from "./types";

export const changelogData: ChangelogEntry[] = [
  {
    version: "2.4.0",
    date: "2024-03-25",
    title: "Introducing Advanced Search Capabilities",
    description: "We've completely revamped our search functionality with new filters, real-time results, and improved relevancy algorithms. Users can now search across multiple dimensions and use advanced operators for more precise results.",
    category: "feature",
    details: [
      "Added support for boolean operators (AND, OR, NOT)",
      "Implemented real-time search suggestions",
      "Added filters for language, file size, and date ranges",
      "Improved search result ranking algorithm",
      "Enhanced search performance for large repositories",
      "Added saved search functionality",
      "Implemented search history tracking",
      "Added export functionality for search results"
    ]
  },
  {
    version: "2.3.2",
    date: "2024-03-20",
    title: "Performance Optimization for Large Repositories",
    description: "Significant improvements to how we handle large repositories, resulting in up to 50% faster load times and reduced memory usage. This update particularly benefits repositories with extensive commit histories.",
    category: "improvement",
    details: [
      "Implemented lazy loading for repository contents",
      "Optimized database queries for large datasets",
      "Reduced memory footprint by 40%",
      "Added caching layer for frequently accessed data",
      "Improved compression algorithms",
      "Enhanced parallel processing capabilities"
    ]
  },
  {
    version: "2.3.1",
    date: "2024-03-15",
    title: "Security Update: Enhanced 2FA Options",
    description: "Added support for additional two-factor authentication methods, including FIDO2 security keys and biometric authentication. This update strengthens account security while maintaining a seamless user experience.",
    category: "security",
    details: [
      "Added FIDO2 WebAuthn support",
      "Implemented biometric authentication",
      "Enhanced backup codes system",
      "Improved security key management UI"
    ]
  },
  {
    version: "2.3.0",
    date: "2024-03-10",
    title: "Bug Fix: Repository Clone Performance",
    description: "Resolved an issue where cloning large repositories would occasionally fail or perform slowly under certain network conditions. This fix implements a more robust retry mechanism and improved progress reporting.",
    category: "fix",
    details: [
      "Implemented automatic retry mechanism",
      "Added detailed progress reporting",
      "Fixed network timeout issues",
      "Optimized large file handling",
      "Enhanced error reporting"
    ]
  },
  {
    version: "2.2.0",
    date: "2024-03-05",
    title: "New Collaboration Features",
    description: "Introducing new collaboration tools to enhance team productivity. These features make it easier for teams to work together on projects and maintain clear communication channels.",
    category: "feature",
    details: [
      "Added real-time collaboration on documents",
      "Implemented team chat functionality",
      "Added project timeline views",
      "Introduced role-based access control",
      "Added team activity dashboard"
    ]
  },
  {
    version: "2.1.5",
    date: "2024-03-01",
    title: "UI/UX Improvements",
    description: "A series of user interface and experience improvements based on user feedback. These changes make the platform more intuitive and accessible for all users.",
    category: "improvement",
    details: [
      "Redesigned navigation menu",
      "Improved color contrast for better accessibility",
      "Added keyboard shortcuts",
      "Enhanced mobile responsiveness",
      "Updated typography for better readability"
    ]
  },
  {
    version: "2.1.4",
    date: "2024-02-25",
    title: "Critical Security Patch",
    description: "Important security update addressing recently identified vulnerabilities. This patch strengthens our system's defenses against potential security threats.",
    category: "security",
    details: [
      "Patched XSS vulnerability in user input handling",
      "Updated dependency packages",
      "Enhanced input validation",
      "Improved error handling for security events"
    ]
  },
  {
    version: "2.1.3",
    date: "2024-02-20",
    title: "Bug Fix: Data Export Issues",
    description: "Fixed several issues affecting data export functionality. Users can now reliably export their data in various formats without encountering errors.",
    category: "fix",
    details: [
      "Fixed CSV export formatting",
      "Resolved PDF generation issues",
      "Fixed data encoding problems",
      "Improved export progress tracking"
    ]
  },
  {
    version: "2.1.0",
    date: "2024-02-15",
    title: "Analytics Dashboard Update",
    description: "Major update to our analytics dashboard with new visualizations and improved data insights. Users can now better understand their data with enhanced reporting capabilities.",
    category: "feature",
    details: [
      "Added new chart types",
      "Implemented custom report builder",
      "Added data export options",
      "Enhanced filtering capabilities",
      "Added real-time data updates"
    ]
  },
  {
    version: "2.0.5",
    date: "2024-02-10",
    title: "Performance Optimization",
    description: "System-wide performance improvements focusing on page load times and resource utilization. Users will experience faster response times across all features.",
    category: "improvement",
    details: [
      "Optimized database queries",
      "Implemented client-side caching",
      "Reduced API response times",
      "Improved asset loading",
      "Enhanced memory management"
    ]
  },
  {
    version: "2.0.4",
    date: "2024-02-05",
    title: "Authentication System Update",
    description: "Enhanced security measures for the authentication system, including improved password policies and session management.",
    category: "security",
    details: [
      "Updated password requirements",
      "Improved session handling",
      "Enhanced security logging",
      "Added IP-based restrictions",
      "Implemented account recovery improvements"
    ]
  },
  {
    version: "2.0.3",
    date: "2024-02-01",
    title: "Bug Fix: Notification System",
    description: "Resolved issues with the notification system where some users weren't receiving important updates and alerts properly.",
    category: "fix",
    details: [
      "Fixed notification delivery delays",
      "Resolved duplicate notifications",
      "Improved notification preferences",
      "Enhanced notification center UI"
    ]
  }
];