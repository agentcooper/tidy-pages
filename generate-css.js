let result = ``;

const selectors = [
  // github.com, activity feed
  `.application-main #dashboard`,

  // github.com, repository recommendations
  `aside[aria-label="Explore"]`,

  // youtube.com, home video recommendations
  `ytd-browse[page-subtype="home"]`,

  // youtube.com, related video recommendations
  `#secondary #related`,

  // facebook.com, profile sidebar
  `[data-pagelet="ProfileTilesFeed_0"]`,
  `[data-pagelet="ProfileTilesFeed_1"]`,
  `[data-pagelet="ProfileTilesFeed_{n}"]`,
];

for (const selector of selectors) {
  result += `
${selector} {
  border: 1px dashed gray !important;
}
${selector} > * {
  visibility: hidden !important;
}
`;
}

console.log(result.trim());
