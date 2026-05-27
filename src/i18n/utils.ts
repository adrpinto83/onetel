import { translations, defaultLang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: string) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguage(currentLang: string): string {
  return currentLang === 'es' ? 'en' : 'es';
}

export function getAlternatePath(currentPath: string, currentLang: string): string {
  const alternateLang = getAlternateLanguage(currentLang);

  if (currentLang === defaultLang) {
    // Currently in Spanish (no prefix), add English prefix
    return `/${alternateLang}${currentPath}`;
  } else {
    // Currently in English (with prefix), remove prefix for Spanish
    const pathWithoutLang = currentPath.replace(`/${currentLang}`, '') || '/';
    return pathWithoutLang;
  }
}
