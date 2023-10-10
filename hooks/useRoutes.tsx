import { useMemo } from 'react';

const useRoutes = () => {
  const routes = useMemo(
    () => [
      {
        label: 'Ver videos',
        path: '#',
      },
      {
        label: 'Beneficios',
        path: '#benefits-section',
      },
      {
        label: 'Socios',
        path: '#steps-section',
      },
      {
        label: 'Sobre Nosotros',
        path: '#quoter-section',
      },
      {
        label: 'FAQs',
        path: '#table-section',
      },
    ],
    [],
  );

  return routes;
};

export default useRoutes;
