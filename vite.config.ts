import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@polym/button',
      fileName: (format) => `polym-button.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', '@polym/a11y']
    }
  }
})
