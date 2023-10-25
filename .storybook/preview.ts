import type { Preview } from "@storybook/react";

import '@/presentation/assets/styles/normalize.css'
import '@/presentation/assets/styles/global.css'
import '@/presentation/assets/styles/variables.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'yellow',
      values: [
        { name: 'yellow', value: '#FFD836' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'black', value: '#000000' },
      ],
    },
  },
};

export default preview;
