const sharedItems = {
  text: "Methodologies",
  items: [{ text: "H3Uni", link: "https://www.h3uni.org/resource-library/" }],
};

export default {
  sidebar: {
    /**
     * This sidebar gets displayed when a user
     * is on `first-principles` directory.
     */

    "/resources/": [
      {
        text: "Launch Pad",
        link: "/resources/introduction/launchpad.md",
        items: [],
      },
      {
        text: "Cosmic Ecology",
        items: [
          {
            text: "Worldviews",
            collapsed: false,
            items: [
              {
                text: "Hydrogen Universe",
                collapsed: true,
                items: [
                  {
                    text: "Hydrogen Universe",
                    link: "/resources/CosmicEcology/Hydrogen/Hydrogen.md",
                  },
                ],
              },
              {
                text: "Informational Universe",
                collapsed: true,
                items: [
                  {
                    text: "Informational Universe",
                    link:
                      "/resources/CosmicEcology/Informational/Informational.md",
                  },
                ],
              },
              {
                text: "Living Universe",
                collapsed: true,
                items: [
                  {
                    text: "Living Universe",
                    link: "/resources/CosmicEcology/Living/Living.md",
                  },
                ],
              },
              {
                text: "Conscious Universe",
                collapsed: true,
                items: [
                  {
                    text: "Conscious Universe",
                    link: "/resources/CosmicEcology/Conscious/Conscious.md",
                  },
                ],
              },
              {
                text: "Accountable Universe",
                collapsed: true,
                items: [
                  {
                    text: "Accountable Universe",
                    link: "/resources/CosmicEcology/Accountable/Accountable.md",
                  },
                ],
              },
            ],
          },
        ],
      },
      sharedItems,
    ],
  },
};
