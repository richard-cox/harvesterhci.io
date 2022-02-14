/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title:
    "The open source hyperconverged infrastructure (HCI) solution for a cloud native world",
  tagline: "",
  url: "https://harvesterhci.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "harvester", // Usually your GitHub org/user name.
  projectName: "harvester.github.io", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      title: "",
      logo: {
        alt: "logo",
        src: "img/logo_horizontal.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "Docs",
          className: "navbar__docs",
        },
        {
          to: "blog",
          position: "right",
          label: "Blog",
          className: "navbar__blog",
        },
        {
          href: "https://github.com/harvester/harvester",
          label: "GitHub",
          position: "right",
          className: "navbar__github btn btn-secondary icon-github",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} harvesterhci.io`,
    },
  },
  customFields: {
    title: "Harvester - Open-source hyperconverged infrastructure",
    description:
      "An open-source hyperconverged infrastructure (HCI) software for a cloud-native world",
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/harvester/harvester.github.io/edit/master/website/",
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/harvester/harvester.github.io/edit/master/website/blog/",
          blogTitle: 'Harvester HCI blog',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          postsPerPage: 10,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
};