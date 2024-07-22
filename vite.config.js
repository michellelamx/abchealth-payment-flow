import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react(),
	],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@containers': path.resolve(__dirname, './src/containers/'),
			'@pages': path.resolve(__dirname, './src/pages/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
		},
	},
})
