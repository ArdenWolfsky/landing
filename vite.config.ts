import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [vitePreprocess()],
			extensions: ['.svelte'],
			adapter: adapter({
				pages: 'build',
				assets: 'build',
				fallback: '404.html'
			}),
			prerender: {
				entries: ['*']
			}
		})
	],
	ssr: {
		noExternal: ['hyperlib-but-svelte']
	},
	optimizeDeps: {
		exclude: ['hyperlib-but-svelte']
	}
});
