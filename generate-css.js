let result = ``;

const selectors = [
  // github.com, activity feed
  `.application-main #dashboard`,

  // youtube.com, home video recommendations
  `ytd-browse[page-subtype="home"]`,

  // youtube.com, home video recommendations
  `#secondary #related`,
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
