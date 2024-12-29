import { NavigationItem } from "./types";

export const siteConfig = {
  name: "UpdateFlow",
  description: "Stay up to date with our latest updates and improvements",
  url: "https://update-flow.vercel.app/",
  nav: {
    main: [
      {
        title: "Changelog",
        href: "/changelog"
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
        href: "https://github.com/mywildancloud",
        icon: "github"
      },
      {
        title: "Instagram",
        href: "https://www.instagram.com/wildan.nrs/",
        icon: "instagram"
      },
      {
        title: "Youtube",
        href: "https://www.youtube.com/@wildan.nrs_",
        icon: "youtube"
      }
    ]
  },
  copyright: {
    startYear: 2024,
    suffix: "All rights reserved."
  }
} as const;
