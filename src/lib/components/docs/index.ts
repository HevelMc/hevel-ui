import { createHighlighter, type BundledLanguage, type BundledTheme, type HighlighterGeneric } from 'shiki';
import highlighterConfig from '../../../highlighter.config';

let highlighterPromise: Promise<HighlighterGeneric<BundledLanguage, BundledTheme>> | null = null;

export const getHighlighter = () => {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter(highlighterConfig);
  }
  return highlighterPromise;
};

export const theme = highlighterConfig.themes[0];
