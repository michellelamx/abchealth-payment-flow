import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@containers': path.resolve(__dirname, './src/containers'),
      '@context': path.resolve(__dirname, './src/context/'),
      '@data': path.resolve(__dirname, './src/data/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
})
