const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    '../src/stories/*.stories.mdx',
    '../src/stories/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    //'@storybook/addon-links',
    //'@storybook/addon-interactions',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false
      }
    },
    '@storybook/addon-storysource',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: '/polym-a11y/',
      // manually specify plugins to avoid conflict
      plugins: []
    })
  }
}
