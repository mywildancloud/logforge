import { NavigationItem } from "./types";

export const siteConfig = {
  name: "Logforge",
  description: "Stay up to date with our latest updates and improvements",
  url: "https://logforge.dev",
  nav: {
    main: [
      {
        title: "Changelog",
        href: "/"
      },
      {
        title: "Documentation",
        href: "https://docs.example.com",
        isExternal: true
      },
      {
        title: "Community",
        href: "https://community.example.com",
        isExternal: true
      }
    ] as NavigationItem[],
    social: [
      {
        title: "GitHub",
        href: "https://github.com",
        icon: "github"
      },
      {
        title: "Twitter",
        href: "https://twitter.com",
        icon: "twitter"
      },
      {
        title: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin"
      }
    ]
  },
  copyright: {
    startYear: 2024,
    suffix: "All rights reserved."
  }
} as const;
