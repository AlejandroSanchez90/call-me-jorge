import { useMemo } from 'react';
import useCurrentLocale from './useCurrentLocale';

const useRoutes = () => {
  const locale = useCurrentLocale();
  const routes = useMemo(
    () => [
      {
        label: locale === 'es' ? 'Watch videos' : 'Ver videos',
        path: '#',
      },
      {
        label: locale === 'es' ? 'Benefits' : 'Beneficios',
        path: '#benefits-section',
      },
      {
        label: locale === 'es' ? 'Partners' : 'Socios',
        path: '#steps-section',
      },
      {
        label: locale === 'es' ? 'About us' : 'Sobre Nosotros',
        path: '#quoter-section',
      },
      {
        label: 'FAQs',
        path: '#table-section',
      },
    ],
    [locale],
  );

  return routes;
};

export default useRoutes;
