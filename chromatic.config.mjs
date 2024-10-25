// chromatic.config.mjs
export default {
    buildScriptName: "build-storybook",
    onlyChanged: true,
    skip: [
        "dependabot/**",
        "renovate/**"
    ],
    exitZeroOnChanges: true,
};