import { useLocale, useTranslations } from 'next-intl';

function useCurrentLocale() {
  const t = useTranslations('LanguageSwitcher');

  if (t('label') === 'English') {
    return 'en';
  } else {
    return 'es';
  }
}

export default useCurrentLocale;
