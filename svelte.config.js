import adapter from '@sveltejs/adapter-static';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import rehypeExternalLinks from 'rehype-external-links';

const theme = 'material-theme-darker';
const highlighter = await createHighlighter({
  themes: [theme],
  langs: ['javascript', 'typescript', 'svelte', 'bash', 'diff']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: mdsvex({
    layout: {
      _: 'src/lib/components/docs/DocLayout.svelte'
    },
    highlight: {
      highlighter: async (code, lang = 'text') => {
        const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
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
