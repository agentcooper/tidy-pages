let result = ``;

// fight popups
result += `
html[style*="overflow: hidden"] {
  overflow: scroll !important;
}
`;

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

  // twitter.com, sidebar
  `[role="main"] [data-testid="sidebarColumn"]`,

  // news.ycombinator.com, hide main page
  `#hnmain .itemlist`,
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
