import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.danielmarques.dev",
  author: "Daniel Marques",
  desc: "My Blog",
  title: "Daniel Marques Blog",
  ogImage: "blog-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/danielmarques12",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/danielmarquesdev",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@danielmarques.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
