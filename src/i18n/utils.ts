import { ui, defaultLang, showDefaultLang } from './ui';
import type { TranslationKey } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: TranslationKey) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    if (path.startsWith('/')) path = path.slice(1);
    return `/${l}/${path}`;
  }
}