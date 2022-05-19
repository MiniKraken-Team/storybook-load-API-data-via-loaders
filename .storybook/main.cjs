const preprocess = require("svelte-preprocess");

module.exports = {
  core: { builder: "@storybook/builder-vite" },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/svelte",
  "svelteOptions": {
    "preprocess": preprocess()
  }
}