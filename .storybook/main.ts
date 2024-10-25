import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    // Add core configurations
    core: {
        disableTelemetry: true,
    },
    refs: {
        // Optional: Add references to other Storybooks if you have them
    },
    staticDirs: ['../public'], // Optional: Configure static files directory
};

export default config;