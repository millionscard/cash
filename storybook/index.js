import { configure, getStorybookUI } from "@storybook/react-native";
import { loadStories } from './storyLoader';

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

configure(() => {
  // Since require.context doesn't exist in metro bundler world, we have to
  // manually import files ending in *.stories.js
  // require("./src/stories");

  // Workaround to prevent a stories/index.js with exports
  loadStories();
}, module);

export default StorybookUIRoot;


