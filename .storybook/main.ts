import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { mergeConfig } from "vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const main: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen",
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        postcss: {
          plugins: [tailwindcss, autoprefixer],
        },
      },
    });
  },
};

export default main;
