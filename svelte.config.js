import adapter from '@sveltejs/adapter-static';
import { mdsvex, escapeSvelte } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import { createHighlighter } from 'shiki';
import highlighterConfig from './src/highlighter.config.js';

const highlighter = await createHighlighter(highlighterConfig);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: mdsvex({
    layout: {
      _: 'src/lib/components/docs/DocLayout.svelte'
    },
    highlight: {
      highlighter: async (code, lang = 'text') => {
        const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: highlighterConfig.themes[0] }));
        return `{@html \`${html}\` }`;
      }
    },
    rehypePlugins: [[rehypeExternalLinks, { rel: [], target: '_blank' }]]
  }),
  extensions: ['.svelte', '.svx'],
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    alias: {
      '$lib/*': './src/lib/*'
    }
  }
};

export default config;
