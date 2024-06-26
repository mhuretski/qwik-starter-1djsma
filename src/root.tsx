import type { NoSerialize} from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import type { StreamOptions } from './routes';
import { useStreamOptionsContextProvider } from './routes';

import './global.css';

export default component$<{ opts?: NoSerialize<StreamOptions> }>(({ opts }) => {
  useStreamOptionsContextProvider(opts);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
