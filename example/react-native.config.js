const project = (() => {
  try {
    const { configureProjects } = require("react-native-test-app");
    return configureProjects({
      android: {
        sourceDir: "android",
      },
      ios: {
        sourceDir: "ios",
      },
      macos: {
        sourceDir: "ios",
      },
      windows: {
        sourceDir: "windows",
        solutionFile: "windows/RNAppleAuthExample.sln",
      },
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  ...(project ? { project } : undefined),
};
